import Link from "next/link";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Correios Rastreio - Página inicial">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-700 text-white shadow-lg shadow-blue-900/20">
        <PaperAirplaneIcon className="h-5 w-5 -rotate-12" />
      </span>
      <span className="text-xl font-extrabold tracking-tight text-brand-900">Correios <span className="text-accent-500">Rastreio</span></span>
    </Link>
  );
}
