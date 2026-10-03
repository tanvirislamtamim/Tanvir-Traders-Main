export default function ContactSection() {
  const mapUrl = "https://www.google.com/maps?q=23%C2%B015'37.2%22N+89%C2%B043'39.5%22E";
  const waUrl = "https://wa.me/+8801760523977";

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12" id="contact" aria-label="যোগাযোগ">
      <div className="bg-gradient-to-br from-white/90 via-orange-50/40 to-white/90 border border-brand-500/25 rounded-3xl p-7 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            ব্যবসায়িক যোগাযোগ ও অর্ডার
          </h3>
          <p className="text-sm sm:text-base text-slate-600">
            পাইকারি পণ্য সরবরাহ বা ডিলারশিপ সংক্রান্ত তথ্যের জন্য সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-md shadow-brand-500/30 hover:shadow-lg hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
            id="contact-map-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>অবস্থান দেখুন</span>
          </a>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-md shadow-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
            id="whatsapp-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>WhatsApp বার্তা</span>
          </a>
        </div>
      </div>
    </section>
  );
}
