import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200/60 bg-slate-50/80 backdrop-blur-md py-6 px-4 md:px-6" id="footer">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <Image src="/icon.svg" alt="Tanvir Traders Logo" width={24} height={24} className="opacity-80" />
          <span>তানভীর ট্রেডার্স</span>
        </div>

        <ul className="flex items-center gap-4 flex-wrap justify-center text-xs text-slate-500">
          <li><a href="#portals" className="hover:text-brand-600 transition-colors">ডিলারশিপ</a></li>
          <li><a href="#about" className="hover:text-brand-600 transition-colors">পরিচিতি</a></li>
          <li><a href="#map-section" className="hover:text-brand-600 transition-colors">অবস্থান</a></li>
          <li><a href="#faq" className="hover:text-brand-600 transition-colors">প্রশ্নোত্তর</a></li>
          <li><a href="/sitemap.xml" target="_blank" className="hover:text-brand-600 transition-colors">সাইটম্যাপ</a></li>
          <li><a href="/robots.txt" target="_blank" className="hover:text-brand-600 transition-colors">Robots.txt</a></li>
        </ul>

        <p className="text-xs text-slate-400">© ২০২৬ Tanvir Traders. সর্বস্বত্ব সংরক্ষিত।</p>
      </div>
    </footer>
  );
}
