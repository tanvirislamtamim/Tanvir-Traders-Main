import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 glass-nav transition-shadow duration-300 shadow-sm" id="navbar">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="তানভীর ট্রেডার্স হোমপেজ">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-md shadow-brand-500/30 group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-200 flex-shrink-0">
            <Image src="/icon.svg" alt="Tanvir Traders Logo" width={26} height={26} className="w-6 h-6 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-slate-900 tracking-tight leading-tight">Tanvir Traders</span>
            <span className="text-xs font-medium text-slate-500 leading-tight">ডিলারশিপ পোর্টাল</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="মূল নেভিগেশন" className="hidden md:block">
          <ul className="flex items-center gap-1">
            <li>
              <a href="#portals" className="text-sm font-semibold text-slate-600 hover:text-brand-600 hover:bg-brand-500/10 px-3 py-1.5 rounded-lg transition-colors">
                পোর্টালসমূহ
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-brand-600 hover:bg-brand-500/10 px-3 py-1.5 rounded-lg transition-colors">
                পরিচিতি
              </a>
            </li>
            <li>
              <a href="#map-section" className="text-sm font-semibold text-slate-600 hover:text-brand-600 hover:bg-brand-500/10 px-3 py-1.5 rounded-lg transition-colors">
                অবস্থান
              </a>
            </li>
            <li>
              <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-brand-600 hover:bg-brand-500/10 px-3 py-1.5 rounded-lg transition-colors">
                প্রশ্নোত্তর
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-brand-600 hover:bg-brand-500/10 px-3 py-1.5 rounded-lg transition-colors">
                যোগাযোগ
              </a>
            </li>
          </ul>
        </nav>

        {/* Active Badge */}
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
          <span>সক্রিয়</span>
        </div>
      </div>
    </header>
  );
}
