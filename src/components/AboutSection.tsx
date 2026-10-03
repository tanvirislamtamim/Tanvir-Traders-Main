export default function AboutSection() {
  const cards = [
    {
      icon: "🏆",
      title: "অনুমোদিত পরিবেশক",
      text: "দেশের শীর্ষস্থানীয় প্রতিষ্ঠান আকিজ বেকার্স লিমিটেড এবং মেঘনা বেভারেজ লিমিটেডের শতভাগ আসল পণ্য সরাসরি কোম্পানি থেকে পরিবেশন করা হয়।",
    },
    {
      icon: "🚚",
      title: "দ্রুত পণ্য সরবরাহ",
      text: "আলফাডাঙ্গা পৌরসভা, মহিষেরঘোপ এবং পার্শ্ববর্তী বাজারগুলোতে নিয়মিত রুটভিত্তিক ভ্যান ও পরিবহনের মাধ্যমে দোকানে দোকানে পৌঁছে দেওয়া হয়।",
    },
    {
      icon: "📊",
      title: "ডিজিটাল হিসাব ও ইনভেন্টরি",
      text: "কাস্টম সফটওয়্যার ও ক্লাউড সিস্টেমের মাধ্যমে স্টক ইনওয়ার্ড, চালান, মেমো ও পেমেন্টের স্বচ্ছ ডিজিটাল রেকর্ড সংরক্ষিত থাকে।",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16" id="about" aria-label="তানভীর ট্রেডার্স পরিচিতি">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-500/10 border border-brand-500/25 px-3.5 py-1 rounded-full mb-3">
          ব্যবসায়িক পরিচিতি
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          বিশ্বস্ত ডিলারশিপ ও পাইকারি বিতরণ
        </h2>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed">
          আলফাডাঙ্গা ও ফরিদপুর অঞ্চলের শীর্ষস্থানীয় খাদ্য ও পানীয় ডিস্ট্রিবিউটর হিসেবে তানভীর ট্রেডার্স সুনামের সাথে খুচরা ব্যবসায়ীদের সেবা দিয়ে আসছে।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-6 sm:p-7 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-2xl mb-4">
              {card.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{card.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
