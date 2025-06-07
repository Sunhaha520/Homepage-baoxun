"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { products } from './data/production';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from "framer-motion";

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

// 只做淡入动画，不上浮
const fadeInOnly = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// 更小体积、幅度更大的浅色气泡
const bubbles = [
  { size: 'w-8 h-8', color: 'bg-gradient-to-br from-[#fff9f2] via-[#ffe9cc] to-[#ffe0b3]', left: 'left-[10%]', delay: 'bubble-anim1', top: 'top-[60%]' },
  { size: 'w-6 h-6', color: 'bg-gradient-to-br from-[#ffe9cc] via-[#fff7e6] to-[#ffd1a6]', left: 'left-[20%]', delay: 'bubble-anim2', top: 'top-[30%]' },
  { size: 'w-10 h-10', color: 'bg-gradient-to-br from-[#fff7e6] via-[#ffd1a6] to-[#ffe9cc]', left: 'left-[70%]', delay: 'bubble-anim3', top: 'top-[50%]' },
  { size: 'w-5 h-5', color: 'bg-gradient-to-br from-[#ffd1a6] via-[#fff7e6] to-[#ffe9cc]', left: 'left-[80%]', delay: 'bubble-anim4', top: 'top-[20%]' },
  { size: 'w-7 h-7', color: 'bg-gradient-to-br from-[#ffe0b3] via-[#fff9f2] to-[#ffd1a6]', left: 'left-[50%]', delay: 'bubble-anim5', top: 'top-[70%]' },
  // 小气泡
  { size: 'w-3 h-3', color: 'bg-gradient-to-br from-[#fff7e6] via-[#ffe0b3] to-[#ffd1a6]', left: 'left-[15%]', delay: 'bubble-anim6', top: 'top-[80%]' },
  { size: 'w-4 h-4', color: 'bg-gradient-to-br from-[#ffd1a6] via-[#fff9f2] to-[#ffe0b3]', left: 'left-[90%]', delay: 'bubble-anim7', top: 'top-[60%]' },
  { size: 'w-3 h-3', color: 'bg-gradient-to-br from-[#ffe0b3] via-[#ffd1a6] to-[#fff7e6]', left: 'left-[35%]', delay: 'bubble-anim8', top: 'top-[20%]' },
  { size: 'w-2 h-2', color: 'bg-gradient-to-br from-[#fff9f2] via-[#ffd1a6] to-[#ffe0b3]', left: 'left-[60%]', delay: 'bubble-anim9', top: 'top-[10%]' },
  { size: 'w-4 h-4', color: 'bg-gradient-to-br from-[#ffd1a6] via-[#ffe0b3] to-[#fff7e6]', left: 'left-[75%]', delay: 'bubble-anim10', top: 'top-[80%]' },
];

export default function BaozhixunLanding() {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Head>
        <title>保之讯</title>
        <meta name="description" content="保之讯保险工作室智能管理系统，助力中小保险工作室数字化转型，提升客户管理效率。" />
        <link rel="icon" href="/imgs/bxq.png" type="image/png" />
        <link rel="shortcut icon" href="/imgs/bxq.png" type="image/png" />
      </Head>
      <Header/>

      {/* Banner Carousel */}
      <section id="home" className="relative">
        <div className="carousel-container relative overflow-hidden h-72 sm:h-96 md:h-[500px]">
          {/* 更浅的渐变背景 */}
          <div className="absolute inset-0 animate-gradient-move bg-gradient-to-r from-[#ffd59e] via-[#ffb366] to-[#ff9900]"></div>
          {/* 半透明背景图 */}
          <div className="absolute inset-0 bg-[url('/assets/banner-bg.jpg')] bg-cover bg-center opacity-10"></div>
          {/* 气泡动画层 */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {bubbles.map((b, i) => (
              <div
                key={i}
                className={`absolute ${b.size} ${b.color} rounded-full opacity-80 ${b.delay} ${b.left} ${b.top} shadow-lg`}
                style={{ mixBlendMode: 'lighten' }}
              ></div>
            ))}
          </div>
          {/* 内容层 */}
          <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
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
      <section id="products" className="py-16 sm:py-20 bg-[#fff9f2]">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#ff7b30]"
            variants={fadeInOnly}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            我们的产品
          </motion.h2>
          <div className="space-y-16">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                custom={idx}
                variants={fadeInOnly}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 bg-white border-2 border-[#ff7b30] ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                style={{
                  boxShadow: '0 4px 24px 0 rgba(255,123,48,0.10), 0 1.5px 8px 0 rgba(255,123,48,0.12)',
                  border: '2.5px solid #ff7b30',
                }}
              >
                <div className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 p-6 flex items-center justify-center bg-[#fff9f2]">
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto object-contain md:object-cover rounded-xl"
                      loading="lazy"
                      variants={fadeInOnly}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      custom={idx}
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-between">
                    <motion.div
                      variants={fadeInOnly}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      custom={idx}
                    >
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#ff7b30]">
                        {product.title}
                      </h2>
                      <p className="text-[#b36b2c] mt-2">{product.subtitle}</p>
                    </motion.div>
                    <motion.ul
                      className="space-y-4 my-8"
                      variants={fadeInOnly}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      custom={idx + 0.5}
                    >
                      {product.features.map((feature, i) => (
                        <motion.li
                          className="flex items-start"
                          key={i}
                          variants={fadeInOnly}
                          custom={i * 0.2}
                        >
                          <div className="bg-[#ffe0c2] p-2 rounded-full mr-4">
                            <svg className="w-5 h-5 text-[#ff7b30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-[#7a4a1e]">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4"
                      variants={fadeInOnly}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      custom={idx + 1}
                    >
                      <Link href="#contact">
                        <button className="w-full sm:w-auto bg-[#ff7b30] hover:bg-[#e66c1a] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                          立即咨询
                        </button>
                      </Link>
                      {product.learnMoreUrl && (
                        <Link href={product.learnMoreUrl}>
                          <button className="w-full sm:w-auto border border-[#ff7b30] text-[#ff7b30] hover:bg-[#fff9f2] px-6 py-3 rounded-lg font-medium transition-colors">
                            了解更多
                          </button>
                        </Link>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-10 bg-[#fff9f2]">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[#ff7b30]"
            variants={fadeInOnly}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            联系我们
          </motion.h2>
          <motion.p
            className="text-center text-[#b36b2c] text-lg mb-8"
            variants={fadeInOnly}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            获得体验资格
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
              icon: (
                <svg className="w-8 h-8 text-[#ff7b30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              ),
              title: "电话咨询",
              content: <p className="text-[#b36b2c]">189-3662-0002</p>
            }, {
              icon: (
                <svg className="w-8 h-8 text-[#ff7b30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              ),
              title: "邮件联系",
              content: <p className="text-[#b36b2c]">baozhixunvip@163.com</p>
            }, {
              icon: (
                <svg className="w-8 h-8 text-[#ff7b30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              ),
              title: "微信咨询",
              content: <div className="bg-[url('/imgs/code.webp')] bg-cover bg-center w-24 h-24 mx-auto"></div>
            }, {
              icon: (
                <svg className="w-8 h-8 text-[#ff7b30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zM12 12c-2.667 0-8 1.333-8 4v3h16v-3c0-2.667-5.333-4-8-4z"></path>
                </svg>
              ),
              title: "地址",
              content: <p className="text-[#b36b2c]">江苏省连云港市赣榆区青口镇东关路盐务管理局二楼201室</p>
            }].map((item, idx) => (
              <motion.div
                key={item.title}
                className="shadow-lg rounded-xl bg-white text-center p-8 transform transition duration-300 hover:scale-105"
                variants={fadeInOnly}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={idx}
              >
                <div className="bg-[#ffe0c2] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-[#ff7b30]">{item.title}</h3>
                {item.content}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

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
        /* 更浅的渐变动画 */
        @keyframes gradient-move {
          0% { background-position: 0% 50%;}
          50% { background-position: 100% 50%;}
          100% { background-position: 0% 50%;}
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 10s ease-in-out infinite;
        }
        /* 气泡动画，幅度更大 */
        @keyframes bubble-anim1 { 0%{transform:translateY(0);} 50%{transform:translateY(-120px) scale(1.12);} 100%{transform:translateY(0);} }
        @keyframes bubble-anim2 { 0%{transform:translateY(0);} 50%{transform:translateY(-90px) scale(1.18);} 100%{transform:translateY(0);} }
        @keyframes bubble-anim3 { 0%{transform:translateY(0);} 50%{transform:translateY(-140px) scale(1.10);} 100%{transform:translateY(0);} }
        @keyframes bubble-anim4 { 0%{transform:translateY(0);} 50%{transform:translateY(-70px) scale(1.20);} 100%{transform:translateY(0);} }
        @keyframes bubble-anim5 { 0%{transform:translateY(0);} 50%{transform:translateY(-100px) scale(1.15);} 100%{transform:translateY(0);} }
        @keyframes bubble-anim6 { 0%{transform:translateY(0);} 50%{transform:translateY(-60px) scale(1.18);} 100%{transform:translateY(0);} }
        @keyframes bubble-anim7 { 0%{transform:translateY(0);} 50%{transform:translateY(-80px) scale(1.13);} 100%{transform:translateY(0);} }
        @keyframes bubble-anim8 { 0%{transform:translateY(0);} 50%{transform:translateY(-50px) scale(1.16);} 100%{transform:translateY(0);} }
        @keyframes bubble-anim9 { 0%{transform:translateY(0);} 50%{transform:translateY(-40px) scale(1.20);} 100%{transform:translateY(0);} }
        @keyframes bubble-anim10 { 0%{transform:translateY(0);} 50%{transform:translateY(-90px) scale(1.11);} 100%{transform:translateY(0);} }
        .bubble-anim1 { animation: bubble-anim1 9s ease-in-out infinite; }
        .bubble-anim2 { animation: bubble-anim2 7s ease-in-out infinite; }
        .bubble-anim3 { animation: bubble-anim3 11s ease-in-out infinite; }
        .bubble-anim4 { animation: bubble-anim4 8s ease-in-out infinite; }
        .bubble-anim5 { animation: bubble-anim5 10s ease-in-out infinite; }
        .bubble-anim6 { animation: bubble-anim6 6.5s ease-in-out infinite; }
        .bubble-anim7 { animation: bubble-anim7 7.5s ease-in-out infinite; }
        .bubble-anim8 { animation: bubble-anim8 8.5s ease-in-out infinite; }
        .bubble-anim9 { animation: bubble-anim9 7.2s ease-in-out infinite; }
        .bubble-anim10 { animation: bubble-anim10 9.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}