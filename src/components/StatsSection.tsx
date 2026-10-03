export default function StatsSection() {
  const stats = [
    { num: "২টি", label: "সক্রিয় ডিলারশিপ" },
    { num: "২৪/৭", label: "পোর্টাল অ্যাক্সেস" },
    { num: "১০০%", label: "ডিজিটাল ম্যানেজমেন্ট" },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-6" id="stats-section" aria-label="পরিসংখ্যান">
      <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-around gap-6 text-center shadow-sm">
        {stats.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 mb-1 tracking-tight">
              {item.num}
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500">
              {item.label}
            </span>
            {index < stats.length - 1 && (
              <div className="hidden sm:block w-px h-10 bg-slate-200 self-end -mr-12 opacity-60" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
