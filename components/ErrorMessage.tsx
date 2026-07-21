import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
export default function ErrorMessage({ message }: { message: string }) { return <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800" role="alert"><ExclamationTriangleIcon className="mt-0.5 h-5 w-5 shrink-0" /><p>{message}</p></div>; }
