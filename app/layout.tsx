import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AiAssistant from "../components/AiAssistant";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "保之讯",
  description: "保之讯科技工作室，助力中小保险工作室数字化转型，提升客户管理效率。",
  icons: [
    { rel: "icon", url: "/imgs/bxq.png", type: "image/png" },
    { rel: "shortcut icon", url: "/imgs/bxq.png", type: "image/png" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-cn">
      <head>
        {/* 兼容性 favicon 标签，防止部分浏览器不识别 metadata.icons */}
        <link rel="icon" href="/imgs/bxq.png" type="image/png" />
        <link rel="shortcut icon" href="/imgs/bxq.png" type="image/png" />
        <title>保之讯</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
         <AiAssistant />
      </body>
    </html>
  );
}