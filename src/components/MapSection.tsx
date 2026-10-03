export default function MapSection() {
  const mapUrl = "https://www.google.com/maps?q=23%C2%B015'37.2%22N+89%C2%B043'39.5%22E";
  const embedUrl = "https://maps.google.com/maps?q=23%C2%B015'37.2%22N+89%C2%B043'39.5%22E&output=embed&z=16";

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12" id="map-section" aria-label="গুগল ম্যাপে আমাদের অবস্থান">
      <div className="glass-card rounded-3xl overflow-hidden shadow-lg border border-slate-200/80">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 p-5 sm:p-6 border-b border-slate-200/80 bg-white/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white shadow-md shadow-brand-500/30 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">আমাদের অবস্থান</h2>
              <p className="text-xs sm:text-sm text-slate-500">MohisherGhop, Alfadanga, Faridpur</p>
            </div>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-brand-600 border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl shadow-sm transition-colors"
            id="map-open-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
            <span>Google Maps-এ খুলুন</span>
          </a>
        </div>

        {/* Map Body */}
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[380px]">
          {/* Iframe */}
          <div className="lg:col-span-2 min-h-[300px] lg:min-h-full w-full bg-slate-100 relative">
            <iframe
              id="google-map-iframe"
              title="তানভীর ট্রেডার্স অবস্থান"
              src={embedUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info Card */}
          <div className="p-6 sm:p-7 bg-white/70 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200/80">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <span className="block text-xs font-semibold text-slate-400">Plus Code</span>
                  <span className="text-sm font-bold text-slate-800">7P5J+Q9</span>
                </div>
              </div>
              <div className="h-px bg-slate-200/60" />
              <div className="flex items-start gap-3">
                <span className="text-xl">🏙️</span>
                <div>
                  <span className="block text-xs font-semibold text-slate-400">উপজেলা</span>
                  <span className="text-sm font-bold text-slate-800">আলফাডাঙ্গা (Alfadanga)</span>
                </div>
              </div>
              <div className="h-px bg-slate-200/60" />
              <div className="flex items-start gap-3">
                <span className="text-xl">🗺️</span>
                <div>
                  <span className="block text-xs font-semibold text-slate-400">জেলা</span>
                  <span className="text-sm font-bold text-slate-800">ফরিদপুর (Faridpur)</span>
                </div>
              </div>
              <div className="h-px bg-slate-200/60" />
              <div className="flex items-start gap-3">
                <span className="text-xl">🏢</span>
                <div>
                  <span className="block text-xs font-semibold text-slate-400">প্রতিষ্ঠান</span>
                  <span className="text-sm font-bold text-slate-800">তানভীর ট্রেডার্স</span>
                </div>
              </div>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm py-3 px-5 rounded-xl shadow-md shadow-brand-500/25 hover:shadow-lg hover:shadow-brand-500/35 hover:-translate-y-0.5 transition-all"
              id="directions-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                <path d="m13 13 6 6" />
              </svg>
              দিকনির্দেশনা পান
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
