"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-inter bg-[#fff3e6]">
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

      {/* Privacy Policy Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#ff7b30]">
            隐私政策
          </h1>
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
            <p className="text-[#7a4a1e] mb-6">
              欢迎使用保之讯（以下简称“我们”或“保之讯”）提供的保险工作室智能管理系统及相关服务。本隐私政策说明我们如何收集、使用、存储和保护您的个人信息。请仔细阅读以下内容。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">1. 我们收集的个人信息</h2>
            <p className="text-[#7a4a1e] mb-4">
              为了提供高效的客户管理和保险业务支持服务，我们可能收集以下类型的个人信息：
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#7a4a1e]">
              <li>基本信息：如姓名、电话号码、电子邮件地址、微信账号等联系方式。</li>
              <li>业务相关信息：如保险订单详情、客户台账数据、承保材料、行驶证或身份证等证件信息。</li>
              <li>技术信息：如IP地址、浏览器类型、设备信息、访问时间和页面浏览记录。</li>
              <li>其他信息：您通过我们的小程序或网页端上传的照片、文件或输入的备注信息。</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">2. 我们如何使用您的信息</h2>
            <p className="text-[#7a4a1e] mb-4">
              我们收集的个人信息将用于以下目的：
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#7a4a1e]">
              <li>提供服务：支持客户管理、订单跟踪、续保提醒和资料存档等功能。</li>
              <li>优化体验：分析用户行为以改进我们的产品和服务。</li>
              <li>沟通联系：通过电话、邮件或微信与您联系，回复咨询或发送通知。</li>
              <li>法律合规：遵守适用的法律法规或回应合法请求。</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">3. 信息共享与披露</h2>
            <p className="text-[#7a4a1e] mb-4">
              我们不会出售或非法共享您的个人信息，但可能在以下情况下披露：
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#7a4a1e]">
              <li>获得您的明确同意后。</li>
              <li>与我们的服务提供商共享，仅限于提供必要的技术支持（如云存储、数据处理）。</li>
              <li>根据法律要求或政府部门的合法请求。</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">4. 信息存储与保护</h2>
            <p className="text-[#7a4a1e] mb-4">
              我们采取合理的技术和管理措施保护您的个人信息，包括但不限于：
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#7a4a1e]">
              <li>数据加密：使用SSL/TLS协议保护数据传输。</li>
              <li>访问控制：限制对个人信息的访问权限。</li>
              <li>定期审查：检查我们的安全措施以应对潜在风险。</li>
            </ul>
            <p className="text-[#7a4a1e] mb-4">
              您的信息将存储在安全的服务器上，除非法律另有要求，存储期限不超过实现服务目的所需的合理时间。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">5. 您的权利</h2>
            <p className="text-[#7a4a1e] mb-4">
              您对自己的个人信息享有以下权利：
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#7a4a1e]">
              <li>访问权：查询我们持有的您的个人信息。</li>
              <li>更正权：请求更正不准确的个人信息。</li>
              <li>删除权：在法律允许的范围内请求删除您的个人信息。</li>
              <li>撤回同意：随时撤回您对信息处理的同意。</li>
            </ul>
            <p className="text-[#7a4a1e] mb-4">
              如需行使上述权利，请通过以下方式联系我们：<br />
              邮箱：baozhixunvip@163.com<br />
              电话：189-3662-0002
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">6. 第三方链接</h2>
            <p className="text-[#7a4a1e] mb-4">
              我们的服务可能包含指向第三方网站或服务的链接。这些第三方的隐私做法不受本政策约束，请您审慎阅读其隐私政策。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">7. 隐私政策的更新</h2>
            <p className="text-[#7a4a1e] mb-4">
              我们可能不时更新本隐私政策，以反映服务变化或法律要求。更新后的政策将在本页面发布，并注明生效日期。我们建议您定期查看以了解最新内容。
            </p>

            <h2 className="text-2xl font-semibold text-[#ff7b30] mb-4">8. 联系我们</h2>
            <p className="text-[#7a4a1e] mb-4">
              如对本隐私政策有任何疑问或需要进一步信息，请联系我们：
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#7a4a1e]">
              <li>邮箱：baozhixunvip@163.com</li>
              <li>电话：189-3662-0002</li>
              <li>地址：江苏省连云港市赣榆区青口镇东关路盐务管理局二楼201室</li>
            </ul>

            <p className="text-[#7a4a1e] italic">
              本隐私政策最后更新日期：2025年5月18日
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