"use client";

import {
  type FormEvent,
  useRef,
  useState,
} from "react";

import {
  MagnifyingGlassIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import { trackingMocks } from "@/data/tracking";

import LoadingSpinner from "@/components/tracking/LoadingSpinner";
import TrackingTimeline from "@/components/tracking/TrackingTimeline";

export default function TrackingSearch() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultCode, setResultCode] = useState<string | null>(null);

  const resultRef = useRef<HTMLDivElement>(null);

  const result = resultCode
    ? trackingMocks[resultCode]
    : undefined;

  function scrollToResult() {
    window.setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  }

  function normalizeTrackingCode(value: string) {
    return value
      .trim()
      .replace(/\s+/g, "")
      .toUpperCase();
  }

  function validateTrackingCode(value: string) {
    if (!value) {
      return "Digite um código de rastreamento.";
    }

    if (value.length < 8) {
      return "O código informado parece incompleto.";
    }

    if (!/^[A-Z0-9]+$/.test(value)) {
      return "Use apenas letras e números no código de rastreamento.";
    }

    return "";
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const normalizedCode = normalizeTrackingCode(code);
    const validationError =
      validateTrackingCode(normalizedCode);

    setCode(normalizedCode);
    setError("");
    setResultCode(null);

    if (validationError) {
      setError(validationError);
      scrollToResult();
      return;
    }

    setLoading(true);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 700);
    });

    const trackingResult =
      trackingMocks[normalizedCode];

    setLoading(false);

    if (!trackingResult) {
      setError(
        "Código não encontrado. Para testar o sistema, use AA123456785BR.",
      );
      scrollToResult();
      return;
    }

    setResultCode(normalizedCode);
    scrollToResult();
  }

  function handleCodeChange(value: string) {
    setCode(value.toUpperCase());

    if (error) {
      setError("");
    }
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white p-3 shadow-2xl shadow-black/20"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative flex-1">
            <span className="sr-only">
              Código de rastreamento
            </span>

            <MagnifyingGlassIcon
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={code}
              onChange={(event) =>
                handleCodeChange(event.target.value)
              }
              placeholder="Digite seu código de rastreio"
              autoComplete="off"
              spellCheck={false}
              maxLength={35}
              className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-base font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="h-14 rounded-xl bg-orange-500 px-8 font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Consultando..." : "Rastrear"}
          </button>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheckIcon
            aria-hidden="true"
            className="h-4 w-4"
          />

          <span>
            Consulta gratuita. Não armazenamos seu código.
          </span>
        </div>
      </form>

      <div
        ref={resultRef}
        className="scroll-mt-28 pt-6"
        aria-live="polite"
        aria-busy={loading}
      >
        {loading && (
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <LoadingSpinner />
          </div>
        )}

        {!loading && error && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-white p-6 text-left shadow-xl"
          >
            <p className="font-bold text-red-700">
              Não foi possível consultar o código
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {error}
            </p>
          </div>
        )}

        {!loading && result && (
          <TrackingTimeline result={result} />
        )}
      </div>
    </div>
  );
}