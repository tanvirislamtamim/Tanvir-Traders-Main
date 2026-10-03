import Link from "next/link";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <BackgroundBlobs />
      <Navbar />
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-32">
        <div className="glass-card max-w-lg w-full text-center p-8 sm:p-12 rounded-3xl shadow-xl">
          <div className="text-7xl sm:text-8xl font-black gradient-text mb-2">৪০৪</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-3">পৃষ্ঠাটি খুঁজে পাওয়া যায়নি</h1>
          <p className="text-sm text-slate-600 mb-8 leading-relaxed">
            আপনি যে পৃষ্ঠাটি খুঁজছেন তা সরানো হয়েছে অথবা লিংকটি ভুল। অনুগ্রহ করে প্রধান ডিলারশিপ পোর্টালে ফিরে যান।
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md shadow-brand-500/30 transition-all"
            >
              হোমপেজে ফিরে যান
            </Link>
            <a
              href="https://tanvir-traders-akij.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm px-5 py-3 rounded-xl border border-slate-200 transition-colors"
            >
              আকিজ পোর্টাল
            </a>
            <a
              href="https://tanvir-traders-fresh.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm px-5 py-3 rounded-xl border border-slate-200 transition-colors"
            >
              ফ্রেশ পোর্টাল
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
