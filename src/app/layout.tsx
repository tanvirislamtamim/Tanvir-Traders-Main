import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tanvirtraders.com"),
  title: {
    default: "তানভীর ট্রেডার্স | আকিজ বেকার্স ও ফ্রেশ অনুমোদিত ডিলারশিপ — আলফাডাঙ্গা, ফরিদপুর",
    template: "%s | তানভীর ট্রেডার্স",
  },
  description:
    "তানভীর ট্রেডার্স (Tanvir Traders) — আলফাডাঙ্গা, ফরিদপুরের অনুমোদিত ডিলারশিপ প্রতিষ্ঠান। আকিজ বেকার্স লিমিটেড (ফ্যান্টাস্টিক বিস্কুট) ও মেঘনা বেভারেজ (ফ্রেশ ড্রিংকস) পরিবেশক পোর্টাল, স্টক ইনওয়ার্ড ও পাইকারি বিতরণ।",
  keywords: [
    "তানভীর ট্রেডার্স",
    "Tanvir Traders",
    "আকিজ বেকার্স",
    "Akij Bakers",
    "ফ্রেশ বেভারেজ",
    "Meghna Beverage",
    "Fantastic biscuit",
    "আকিজ বিস্কুট ডিলার",
    "আলফাডাঙ্গা ডিলার",
    "ফরিদপুর বিস্কুট ডিলার",
    "পাইকারি বিস্কুট ফরিদপুর",
    "ডিলারশিপ পোর্টাল",
  ],
  authors: [{ name: "Tanvir Traders" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://tanvirtraders.com",
    languages: {
      "bn-BD": "https://tanvirtraders.com",
      en: "https://tanvirtraders.com",
      "x-default": "https://tanvirtraders.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://tanvirtraders.com",
    siteName: "তানভীর ট্রেডার্স | Tanvir Traders",
    title: "তানভীর ট্রেডার্স | আকিজ বেকার্স ও ফ্রেশ অনুমোদিত ডিলারশিপ পোর্টাল",
    description:
      "আকিজ বেকার্স (ফ্যান্টাস্টিক) ও মেঘনা বেভারেজ (ফ্রেশ) অনুমোদিত ডিলারশিপ ম্যানেজমেন্ট পোর্টাল। মহিষেরঘোপ, আলফাডাঙ্গা, ফরিদপুর।",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "তানভীর ট্রেডার্স ডিলারশিপ পোর্টাল",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "তানভীর ট্রেডার্স | ডিলারশিপ পোর্টাল",
    description: "আকিজ বেকার্স ও ফ্রেশ অনুমোদিত ডিলারশিপ ম্যানেজমেন্ট পোর্টাল। আলফাডাঙ্গা, ফরিদপুর।",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "BD-16",
    "geo.placename": "Alfadanga, Faridpur, Bangladesh",
    "geo.position": "23.260333;89.727639",
    ICBM: "23.260333, 89.727639",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://tanvirtraders.com/#website",
      url: "https://tanvirtraders.com/",
      name: "তানভীর ট্রেডার্স",
      alternateName: "Tanvir Traders",
      description: "আকিজ বেকার্স ও মেঘনা বেভারেজ (ফ্রেশ) অনুমোদিত ডিলারশিপ পোর্টাল ও পাইকারি বিতরণ কেন্দ্র।",
      inLanguage: "bn-BD",
      publisher: {
        "@id": "https://tanvirtraders.com/#localbusiness",
      },
    },
    {
      "@type": ["LocalBusiness", "WholesaleStore"],
      "@id": "https://tanvirtraders.com/#localbusiness",
      name: "তানভীর ট্রেডার্স",
      legalName: "Tanvir Traders",
      alternateName: "Tanvir Traders Dealership",
      url: "https://tanvirtraders.com/",
      logo: "https://tanvirtraders.com/icon-512.png",
      image: "https://tanvirtraders.com/og-image.png",
      description:
        "তানভীর ট্রেডার্স আলফাডাঙ্গা, ফরিদপুরের আকিজ বেকার্স লিমিটেড এবং মেঘনা বেভারেজ লিমিটেডের অনুমোদিত ডিলারশিপ প্রতিষ্ঠান।",
      address: {
        "@type": "PostalAddress",
        streetAddress: "মহিষেরঘোপ (MohisherGhop)",
        addressLocality: "আলফাডাঙ্গা (Alfadanga)",
        addressRegion: "ফরিদপুর (Faridpur)",
        postalCode: "7860",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.260333,
        longitude: 89.727639,
      },
      hasMap: "https://www.google.com/maps?q=23%C2%B015'37.2%22N+89%C2%B043'39.5%22E",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      priceRange: "৳৳",
      currenciesAccepted: "BDT",
      paymentAccepted: "Cash, Bank Transfer, bKash, Nagad",
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Alfadanga Upazila",
        },
        {
          "@type": "AdministrativeArea",
          name: "Faridpur District",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tanvirtraders.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "হোম",
          item: "https://tanvirtraders.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "আকিজ বেকার্স পোর্টাল",
          item: "https://tanvir-traders-akij.vercel.app/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ফ্রেশ বেভারেজ পোর্টাল",
          item: "https://tanvir-traders-fresh.vercel.app/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://tanvirtraders.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "তানভীর ট্রেডার্স কোন কোন ব্র্যান্ডের অনুমোদিত ডিলার?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "তানভীর ট্রেডার্স আকিজ বেকার্স লিমিটেড (ফ্যান্টাস্টিক বিস্কুট, বেকারি পণ্য) এবং মেঘনা বেভারেজ লিমিটেড (ফ্রেশ বেভারেজ ও পানীয়)-এর অনুমোদিত পরিবেশক ও ডিলার।",
          },
        },
        {
          "@type": "Question",
          name: "তানভীর ট্রেডার্স কোন অঞ্চলে পণ্য সরবরাহ করে?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "আমরা ফরিদপুর জেলার আলফাডাঙ্গা উপজেলা, মহিষেরঘোপ ও সংলগ্ন আশেপাশের বাজারগুলোর সকল খুচরা ও পাইকারি দোকানে নির্ভরযোগ্যভাবে পণ্য সরবরাহ করে থাকি।",
          },
        },
        {
          "@type": "Question",
          name: "খুচরা দোকানদার বা ব্যবসায়ীরা কীভাবে অর্ডার করবেন?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "অনলাইনে আমাদের ডেডিকেটেড ডিলারশিপ পোর্টালে প্রবেশ করে অথবা আমাদের ডিপোতে সরাসরি এসে বা ফোন/হোয়াটসঅ্যাপে যোগাযোগ করে অর্ডার প্রদান করতে পারবেন।",
          },
        },
        {
          "@type": "Question",
          name: "তানভীর ট্রেডার্সের সঠিক অবস্থান ও যোগাযোগের ঠিকানা কী?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'আমাদের প্রতিষ্ঠান মহিষেরঘোপ, আলফাডাঙ্গা, ফরিদপুর অবস্থিত (Google Plus Code: 7P5J+Q9, Coordinates: 23°15\'37.2"N 89°43\'39.5"E)।',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-slate-50 text-slate-800 selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
