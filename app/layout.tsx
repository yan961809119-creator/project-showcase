import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://project-showcase.vercel.app"),
  title: "澄野 Studio | 让复杂业务，成为清晰体验",
  description:
    "从策略到设计与开发，为成长型团队打造清晰、有说服力的数字产品体验。",
  openGraph: {
    title: "澄野 Studio | 项目展示",
    description: "策略、设计与技术协作，让好想法更快成为真实价值。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
