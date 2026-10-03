"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "তানভীর ট্রেডার্স কোন কোন ব্র্যান্ডের অনুমোদিত ডিলার?",
    answer:
      "তানভীর ট্রেডার্স দেশের অন্যতম শীর্ষস্থানীয় খাদ্যপণ্য উৎপাদনকারী প্রতিষ্ঠান আকিজ বেকার্স লিমিটেড (ফ্যান্টাস্টিক বিস্কুট ও বেকারি পণ্য) এবং মেঘনা বেভারেজ লিমিটেড (ফ্রেশ বেভারেজ, জুস ও ড্রিংকস)-এর অনুমোদিত পরিবেশক ও ডিলারশিপ পরিচালনা করে।",
  },
  {
    question: "আপনারা কোন কোন এলাকায় পণ্য বিতরণ করেন?",
    answer:
      "আমরা ফরিদপুর জেলার আলফাডাঙ্গা উপজেলা, মহিষেরঘোপ, কামারগ্রাম, গোপালপুর এবং সংলগ্ন বাজারসমূহের সকল খুচরা বিক্রেতা ও মুদি দোকানে নির্ভরযোগ্যভাবে নিজস্ব পরিবহনে পণ্য পৌঁছে দিই।",
  },
  {
    question: "খুচরা বিক্রেতারা কীভাবে নতুন অর্ডার দিতে পারেন?",
    answer:
      "খুচরা দোকানদাররা আমাদের সেলস রিপ্রেজেন্টেটিভদের (SR) মাধ্যমে, আমাদের অনলাইন ডিলারশিপ পোর্টালের মাধ্যমে অথবা সরাসরি ফোন এবং হোয়াটসঅ্যাপের মাধ্যমে মেমো বা অর্ডার দিতে পারেন।",
  },
  {
    question: "তানভীর ট্রেডার্সের প্রধান কার্যালয় বা ডিপো কোথায়?",
    answer:
      'আমাদের প্রধান ডিপো ও অফিস মহিষেরঘোপ, আলফাডাঙ্গা, ফরিদপুর। Google Maps-এ আমাদের অবস্থান পেতে Plus Code: 7P5J+Q9 অথবা ভৌগোলিক কোঅর্ডিনেট 23°15\'37.2"N 89°43\'39.5"E ব্যবহার করতে পারেন।',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16" id="faq" aria-label="সাধারণ প্রশ্নোত্তর">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-500/10 border border-brand-500/25 px-3.5 py-1 rounded-full mb-3">
          সাধারণ জিজ্ঞাসা
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
        </h2>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed">
          তানভীর ট্রেডার্সের ডিলারশিপ, পাইকারি পণ্য সরবরাহ ও সেবা সম্পর্কিত সাধারণ তথ্য।
        </p>
      </div>

      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? "border-brand-500/40 shadow-md" : "border-slate-200/80"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-800 hover:text-brand-600 transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-brand-500" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
