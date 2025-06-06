"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function TermsOfService() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-inter bg-[#fff3e6]">
      <Head>
        <title>服务条款 - 保之讯</title>
        <meta name="description" content="了解使用保之讯保险工作室智能管理系统的服务条款和用户责任。" />
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
            <Link href="/#products" className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg">
              产品介绍
            </Link>
            <Link href="/#contact" className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg">
              联系我们
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
              <Link href="/#products" className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                产品介绍
              </Link>
              <Link href="/#contact" className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                联系我们
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Terms of Service Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#ff7b30]">
            服务条款
          </h1>
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
            {/* ...正文内容保持不变... */}
            <p className="text-[#7a4a1e] mb-6">
              欢迎使用保之讯（以下简称“我们”或“保之讯”）提供的保险工作室智能管理系统及相关服务（以下简称“服务”）。在使用我们的服务之前，请仔细阅读以下服务条款（以下简称“条款”）。通过访问或使用我们的服务，您表示同意受本条款约束。如果您不同意，请勿使用我们的服务。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">1. 服务内容</h2>
            <p className="text-[#7a4a1e] mb-4">
              保之讯提供保险工作室智能管理系统，包括但不限于客户管理、订单跟踪、续保提醒、资料存档和同步小程序等功能，旨在帮助中小型保险工作室实现数字化转型和提升管理效率。您可以通过我们的网页端或小程序访问服务。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">2. 用户资格与责任</h2>
            <p className="text-[#7a4a1e] mb-4">
              使用我们的服务，您必须：
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#7a4a1e]">
              <li>年满18周岁，并具有完全民事行为能力。</li>
              <li>提供真实、准确、完整的注册信息，并及时更新。</li>
              <li>妥善保管您的账户和密码，不得将账户转让或借给他人使用。</li>
              <li>对通过您的账户进行的所有活动和行为负责。</li>
            </ul>
            <p className="text-[#7a4a1e] mb-4">
              您同意不以任何非法或未经授权的方式使用服务，包括但不限于上传违法内容、侵犯他人权益或干扰服务正常运行。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">3. 服务使用规则</h2>
            <p className="text-[#7a4a1e] mb-4">
              在使用服务时，您不得：
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#7a4a1e]">
              <li>上传、存储或分享任何违法、侵权或有害内容（如色情、暴力或虚假信息）。</li>
              <li>尝试破解、逆向工程或以其他方式干扰服务的安全性和完整性。</li>
              <li>使用服务进行商业用途，除非获得我们明确书面同意。</li>
              <li>通过自动化手段（如爬虫）未经授权访问或收集数据。</li>
            </ul>
            <p className="text-[#7a4a1e] mb-4">
              我们保留在发现违反本条款的行为时，暂停或终止您的服务访问权限的权利。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">4. 知识产权</h2>
            <p className="text-[#7a4a1e] mb-4">
              服务中的所有内容（包括但不限于文字、图片、代码、设计和商标）均属保之讯或其许可方所有，受版权、商标和其他知识产权法律法规保护。您仅被授予有限的、非排他性的使用许可，仅限在遵守本条款的前提下使用服务。您不得复制、修改、分发或以其他方式使用服务内容，除非获得我们明确书面授权。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">5. 服务可用性与免责声明</h2>
            <p className="text-[#7a4a1e] mb-4">
              我们致力于提供稳定可靠的服务，但不对以下情况承担责任：
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#7a4a1e]">
              <li>因不可抗力（如自然灾害、网络攻击）导致的服务中断。</li>
              <li>因用户设备、网络连接或不当操作导致的服务不可用。</li>
              <li>因您上传的数据丢失或损坏（建议您定期备份重要数据）。</li>
            </ul>
            <p className="text-[#7a4a1e] mb-4">
              服务按“现状”提供，我们不对服务的适用性、准确性或特定用途作出任何明示或暗示的保证。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">6. 责任限制</h2>
            <p className="text-[#7a4a1e] mb-4">
              在法律允许的范围内，保之讯及其关联方不对因使用服务而导致的任何间接、附带、特殊或后果性损害（如数据丢失、利润损失）承担责任。我们的总责任金额不超过您在过去12个月内为服务支付的费用（如适用）。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">7. 条款变更</h2>
            <p className="text-[#7a4a1e] mb-4">
              我们可能根据需要更新本服务条款，以反映服务变化或法律要求。更新后的条款将在本页面发布，并注明生效日期。继续使用服务即表示您同意新条款。我们建议您定期查看以了解最新内容。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">8. 终止服务</h2>
            <p className="text-[#7a4a1e] mb-4">
              如果您违反本条款，我们可能随时暂停或终止您的服务访问权限。您也可以随时停止使用服务。终止后，您的数据可能被删除，建议您提前备份。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">9. 适用法律与争议解决</h2>
            <p className="text-[#7a4a1e] mb-4">
              本条款受中华人民共和国法律管辖。因本条款或服务产生的任何争议，应首先通过友好协商解决；协商不成的，任何一方可向保之讯所在地（江苏省连云港市）有管辖权的人民法院提起诉讼。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">10. 联系我们</h2>
            <p className="text-[#7a4a1e] mb-4">
              如对本服务条款有任何疑问或需要进一步信息，请联系我们：
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#7a4a1e]">
              <li>邮箱：baozhixunvip@163.com</li>
              <li>电话：189-3662-0002</li>
              <li>地址：江苏省连云港市赣榆区青口镇东关路盐务管理局二楼201室</li>
            </ul>

            <p className="text-[#7a4a1e] italic">
              本服务条款最后更新日期：2025年5月18日
            </p>
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
      `}</style>
    </div>
  );
}