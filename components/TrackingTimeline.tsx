import { CheckCircleIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import type { TrackingResult } from "@/data/tracking";

const badgeStyles = { "Entregue": "bg-blue-100 text-blue-800", "Em trânsito": "bg-emerald-100 text-emerald-800", "Aguardando": "bg-orange-100 text-orange-800" };
export default function TrackingTimeline({ result }: { result: TrackingResult }) {
  return <section className="card overflow-hidden" aria-live="polite">
    <div className="flex flex-col gap-3 border-b border-slate-100 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div><p className="text-sm font-medium text-slate-500">Código rastreado</p><h2 className="mt-1 text-xl font-bold text-brand-900">{result.code}</h2></div>
      <div className="flex flex-wrap items-center gap-3"><span className={`rounded-full px-4 py-2 text-sm font-bold ${badgeStyles[result.currentStatus]}`}>{result.currentStatus}</span>{result.estimatedDelivery && <span className="text-sm text-slate-600">Previsão: <strong>{result.estimatedDelivery}</strong></span>}</div>
    </div>
    <div className="p-6 sm:p-8"><ol className="relative ml-3 border-l-2 border-brand-100">{result.events.map((event, index) => <li key={`${event.date}-${event.time}`} className="relative mb-9 ml-7 last:mb-0">
      <span className={`absolute -left-[42px] grid h-7 w-7 place-items-center rounded-full ring-8 ring-white ${index === 0 ? "bg-accent-500 text-white" : "bg-brand-100 text-brand-700"}`}>{index === 0 ? <CheckCircleIcon className="h-5 w-5" /> : <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />}</span>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between"><div><h3 className="font-bold text-slate-900">{event.status}</h3><p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600"><MapPinIcon className="h-4 w-4" />{event.location}</p>{event.detail && <p className="mt-2 text-sm text-slate-500">{event.detail}</p>}</div><p className="mt-2 flex shrink-0 items-center gap-1.5 text-sm font-medium text-slate-500 sm:mt-0"><ClockIcon className="h-4 w-4" />{event.date} às {event.time}</p></div>
    </li>)}</ol></div>
  </section>;
}
