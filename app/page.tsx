"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { products } from './data/production';

interface TypewriterProps {
  text: string;
  speed?: number;
}

function Typewriter({ text, speed = 60 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let stopped = false;
    setDisplayed('');
    function showChar(i: number) {
      if (stopped) return;
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        if (i < text.length) {
          setTimeout(() => showChar(i + 1), speed);
        }
      }
    }
    showChar(1);
    return () => { stopped = true; };
  }, [text, speed]);

  return <span>{displayed}<span className="animate-pulse">|</span></span>;
}

export default function BaozhixunLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Head>
        <title>保之讯</title>
        <meta name="description" content="保之讯保险工作室智能管理系统，助力中小保险工作室数字化转型，提升客户管理效率。" />
        <link rel="icon" href="/imgs/bxq.png" type="image/png" />
        <link rel="shortcut icon" href="/imgs/bxq.png" type="image/png" />
      </Head>
      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/imgs/bxq.png" alt="Logo" className="h-10 w-10" />
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
            <Link href="https://www.baozhixun.cn/crm" className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg">
              CRM系统
            </Link>
          </nav>
          <button
            className="md:hidden border border-[#ffd6b3] rounded-md px-3 py-1.5 text-sm text-[#7a4a1e] hover:bg-[#fff3e6] flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="菜单"
          >
            {mobileMenuOpen ? (
              // X 图标
              <svg className="w-6 h-6" fill="none" stroke="#ff7b30" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // 汉堡图标
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
            </nav>
          </div>
        )}
      </header>

      {/* Banner Carousel */}
      <section id="home" className="relative">
        <div className="carousel-container relative overflow-hidden h-72 sm:h-96 md:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b30] via-[#ffae7b] to-[#fff3e6]"></div>
          <div className="absolute inset-0 bg-[url('/assets/banner-bg.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow">
                保之讯科技
              </h1>
              <p className="text-white mb-8 text-lg sm:text-xl drop-shadow h-8 sm:h-10 md:h-12 flex items-center justify-center">
                <Typewriter text="助力中小保险工作室数字化转型，提升客户管理效率" speed={60} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 sm:py-20 bg-[#fff3e6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#ff7b30]">
            我们的产品
          </h2>
          <div className="space-y-16">
            {products.map((product, idx) => (
              <div
                key={product.id}
                className={`shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 bg-white border-2 border-[#ff7b30] ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                style={{
                  boxShadow: '0 4px 24px 0 rgba(255,123,48,0.10), 0 1.5px 8px 0 rgba(255,123,48,0.12)',
                  border: '2.5px solid #ff7b30',
                }}
              >
                <div className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 p-6 flex items-center justify-center bg-[#fff3e6]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto object-contain md:object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#ff7b30]">
                        {product.title}
                      </h2>
                      <p className="text-[#b36b2c] mt-2">{product.subtitle}</p>
                    </div>
                    <ul className="space-y-4 my-8">
                      {product.features.map((feature, i) => (
                        <li className="flex items-start" key={i}>
                          <div className="bg-[#ffe0c2] p-2 rounded-full mr-4">
                            <svg className="w-5 h-5 text-[#ff7b30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-[#7a4a1e]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="#contact">
                        <button className="w-full sm:w-auto bg-[#ff7b30] hover:bg-[#e66c1a] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                          立即咨询
                        </button>
                      </Link>
                      {product.learnMoreUrl && (
                        <Link href={product.learnMoreUrl}>
                          <button className="w-full sm:w-auto border border-[#ff7b30] text-[#ff7b30] hover:bg-[#fff3e6] px-6 py-3 rounded-lg font-medium transition-colors">
                            了解更多
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-[#fff3e6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#ff7b30]">
            联系我们
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="shadow-lg rounded-xl bg-white text-center p-8 transform transition duration-300 hover:scale-105">
              <div className="bg-[#ffe0c2] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#ff7b30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-[#ff7b30]">电话咨询</h3>
              <p className="text-[#b36b2c]">189-3662-0002</p>
            </div>
            <div className="shadow-lg rounded-xl bg-white text-center p-8 transform transition duration-300 hover:scale-105">
              <div className="bg-[#ffe0c2] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#ff7b30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-[#ff7b30]">邮件联系</h3>
              <p className="text-[#b36b2c]">baozhixunvip@163.com</p>
            </div>
            <div className="shadow-lg rounded-xl bg-white text-center p-8 transform transition duration-300 hover:scale-105">
              <div className="bg-[#ffe0c2] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#ff7b30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-[#ff7b30]">微信咨询</h3>
              <div className="bg-[url('/imgs/code.webp')] bg-cover bg-center w-24 h-24 mx-auto"></div>
            </div>
            <div className="shadow-lg rounded-xl bg-white text-center p-8 transform transition duration-300 hover:scale-105">
              <div className="bg-[#ffe0c2] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#ff7b30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zM12 12c-2.667 0-8 1.333-8 4v3h16v-3c0-2.667-5.333-4-8-4z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-[#ff7b30]">地址</h3>
              <p className="text-[#b36b2c]">江苏省连云港市赣榆区青口镇东关路盐务管理局二楼201室</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#ff7b30] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-3">
                <span className="text-xl font-bold">保之讯</span>
              </div>
            </div>
            <div className="flex space-x-8">
              <Link href="/privacy-policy" className="text-[#fff3e6] hover:text-white transition-colors text-sm">
                隐私政策
              </Link>
              <Link href="/terms-of-service" className="text-[#fff3e6] hover:text-white transition-colors text-sm">
                服务条款
              </Link>
            </div>
          </div>
          <div className="border-t border-[#ffd6b3] mt-8 pt-8 text-center text-[#ffe0c2] text-sm">
            <p>© {new Date().getFullYear()} 保之讯 版权所有</p>
          </div>
        </div>
      </footer>
      {/* 动画样式 */}
      <style jsx global>{`
        @keyframes slide-in-right {
          0% { transform: translateX(100%);}
          100% { transform: translateX(0);}
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-pulse {
          display: inline-block;
          width: 1ch;
          animation: pulse 1s infinite;
        }
      `}</style>
    </div>
  );
}