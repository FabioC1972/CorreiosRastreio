"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const links = [
  ["Início", "/"], ["Blog", "/blog"], ["Sobre", "/sobre"], ["Contato", "/contato"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container-site flex h-18 min-h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => <Link key={href} href={href} className="font-medium text-slate-600 transition hover:text-brand-700">{label}</Link>)}
          <Link href="/#rastrear" className="btn-primary py-2.5">Rastrear Agora</Link>
        </nav>
        <button className="rounded-lg p-2 text-brand-900 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menu">
          {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>
      {open && <nav className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-50">{label}</Link>)}<Link onClick={() => setOpen(false)} href="/#rastrear" className="btn-primary mt-2 w-full">Rastrear Agora</Link></nav>}
    </header>
  );
}
