"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/imgs/logo.webp" alt="Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-[#ff7b30]">
            <Link href="/">保之讯</Link>
          </span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg">
            首页
          </Link>
          <Link href="#products" className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg">
            产品介绍
          </Link>
          <Link href="#contact" className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg">
            联系我们
          </Link>
          <a
            href="https://www.baozhixun.cn/crm"
            className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            CRM系统
          </a>
        </nav>
        <button
          className="md:hidden border border-[#ffd6b3] rounded-md px-3 py-1.5 text-sm text-[#7a4a1e] hover:bg-[#fff3e6] flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="菜单"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="#ff7b30" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="#ff7b30" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>
      {/* 移动端菜单浮层 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end">
          <nav className="w-64 bg-white h-full shadow-lg flex flex-col py-8 px-6 space-y-6 animate-slide-in-right">
            <button
              className="self-end mb-6"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="关闭菜单"
            >
              <svg className="w-7 h-7" fill="none" stroke="#ff7b30" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link href="/" className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
              首页
            </Link>
            <Link href="#products" className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
              产品介绍
            </Link>
            <Link href="#contact" className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
              联系我们
            </Link>
            <a
              href="https://www.baozhixun.cn/crm"
              className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              CRM系统
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}