export default function PortalCards() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-10 text-center relative z-10" id="hero">
      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/25 text-brand-600 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
        <span className="w-2 h-2 rounded-full bg-brand-500" />
        অনুমোদিত ডিলারশিপ পোর্টাল
      </div>

      {/* Hero Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-5">
        <span className="gradient-text inline-block p-4">তানভীর ট্রেডার্স</span>
        <br />
        <span className="text-slate-700 text-2xl sm:text-3xl md:text-4xl font-bold tracking-normal">
          ডিলারশিপ ম্যানেজমেন্ট
        </span>
      </h1>

      <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed mb-12">
        আপনার ডিলারশিপ পোর্টাল বেছে নিন। দৈনিক বিক্রয়, স্টক ইনওয়ার্ড, ইনভেন্টরি এবং আর্থিক প্রতিবেদন পরিচালনা করুন।
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left" id="portals">
        {/* Akij Card */}
        <article className="h-full">
          <a
            href="https://tanvir-traders-akij.vercel.app/"
            id="akij-card"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between h-full p-7 sm:p-8 rounded-3xl glass-card hover:border-brand-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 overflow-hidden"
            aria-label="আকিজ বেকার্স ডিলারশিপ পোর্টালে প্রবেশ করুন"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V12" />
                    <path d="m16 17 2 2 4-4" />
                    <path d="M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753" />
                    <path d="M3.29 7 12 12l8.71-5" />
                    <path d="m7.5 4.27 8.997 5.148" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full">
                  Akij Bakers
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                আকিজ বেকার্স
              </h2>
              <p className="text-xs font-semibold text-slate-400 mb-3">Fantastic ডিলারশিপ</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                আকিজ বেকার্স (ফ্যান্টাস্টিক) অনুমোদিত ডিলারশিপ। দৈনিক বিক্রয়, স্টক ইনওয়ার্ড ও ইনভেন্টরি ম্যানেজমেন্ট।
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">📦 স্টক ম্যানেজমেন্ট</span>
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">📊 বিক্রয় রিপোর্ট</span>
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">🏷️ প্রাইসিং</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 font-semibold text-sm text-brand-600 group-hover:translate-x-1 transition-transform">
              <span>পোর্টালে প্রবেশ করুন</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </a>
        </article>

        {/* Fresh Card */}
        <article className="h-full">
          <a
            href="https://tanvir-traders-fresh.vercel.app/"
            id="fresh-card"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between h-full p-7 sm:p-8 rounded-3xl glass-card hover:border-sky-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 overflow-hidden"
            aria-label="মেঘনা বেভারেজ (ফ্রেশ) ডিলারশিপ পোর্টালে প্রবেশ করুন"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V12" />
                    <path d="m16 17 2 2 4-4" />
                    <path d="M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753" />
                    <path d="M3.29 7 12 12l8.71-5" />
                    <path d="m7.5 4.27 8.997 5.148" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
                  Meghna Beverage
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                ফ্রেশ বেভারেজ
              </h2>
              <p className="text-xs font-semibold text-slate-400 mb-3">Meghna Beverage Ltd ডিলারশিপ</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                মেঘনা বেভারেজ লিমিটেড (ফ্রেশ) অনুমোদিত ডিলারশিপ। পানীয় পণ্যের বিতরণ, বিক্রয় ও ইনভেন্টরি ব্যবস্থাপনা।
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">💧 বেভারেজ বিতরণ</span>
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">📈 আর্থিক হিসাব</span>
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">🗂️ ইনভেন্টরি ERP</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 font-semibold text-sm text-sky-600 group-hover:translate-x-1 transition-transform">
              <span>পোর্টালে প্রবেশ করুন</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
}
