import "./css/style.css";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import type { Metadata } from "next";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  generator: "Zeynep Ezgi Kaya",
  applicationName: "Uzman Psikolojik Danışman Zeynep Ezgi Kaya",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Zeynep Ezgi Kaya",
    "Zeynep Ezgi Gökhan",
    "Gaziemir",
    "gaziemir oyun terapisi",
    "izmir oyun terapisi",
    "Oyun terapisi",
    "izmir danışmanlık",
    "izmir psikoloji",
    "zeynep ezgi kaya",
    "zeynep ezgi gökhan",
    "çocuk terapisi",
    "aile terapisi",
    "dikkat eksikliği gaziemir",
    "dehb gaziemir",
    "dehb izmir",
    "kaygı gaziemir",
    "kendini affetmek",
    "minnettarlık atölyesi",
    "gaziemir dikkat eksikliği",
  ],
  authors: { name: "Zeynep Ezgi Kaya" },
  creator: "Zeynep Ezgi Kaya",
  publisher: "Zeynep Ezgi Kaya",
  metadataBase: new URL("https://www.zeynepezgikaya.com/"),
  openGraph: {
    title: "Zeynep Ezgi Kaya",
    description: "Uzman Psikolojik Danışman",
    url: "https://www.zeynepezgikaya.com/",
    siteName: "Zeynep Ezgi Kaya",
    images: [
      {
        url: "https://www.zeynepezgikaya.com/images/logo.webp",
        width: 160,
        height: 65,
        alt: "Zeynep Ezgi Kaya Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeynep Ezgi Kaya",
    description: "Uzman Psikolojik Danışman",
    creator: "@pd.zeynepezgikaya",
    images: ["https://www.zeynepezgikaya.com/images/logo.webp"],
  },
  manifest: "https://www.zeynepezgikaya.com/manifest.json",
  title: "Zeynep Ezgi Kaya",
  description:
    "Uzman Psikolojik Danışman Zeynep Ezgi Kaya, İzmir / Gaziemir. Online randevu alabilir, yazılarımı okuyabilir veya benimle ilgili daha fazla bilgi edinebilirsiniz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Footer />
        </div>

        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-XV4HRT4ZN0" />

      <GoogleTagManager gtmId="GTM-PXTM6M75" />
    </html>
  );
}
