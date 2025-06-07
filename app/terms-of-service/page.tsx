"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from "framer-motion";

// 只做淡入动画，不上浮
const fadeInOnly = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function TermsOfService() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-inter bg-[#fff3e6]">
      <Head>
        <title>服务条款 - 保之讯</title>
        <meta name="description" content="了解使用保之讯保险工作室智能管理系统的服务条款和用户责任。" />
      </Head>
      <Header/>
      {/* Navigation */}

      {/* Terms of Service Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#ff7b30]"
            variants={fadeInOnly}
            initial="hidden"
            animate="visible"
          >
            服务条款
          </motion.h1>
          <motion.div
            className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8"
            variants={fadeInOnly}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="text-[#7a4a1e] mb-6" variants={fadeInOnly} custom={0.1}>
              欢迎使用保之讯（以下简称“我们”或“保之讯”）提供的保险工作室智能管理系统及相关服务（以下简称“服务”）。在使用我们的服务之前，请仔细阅读以下服务条款（以下简称“条款”）。通过访问或使用我们的服务，您表示同意受本条款约束。如果您不同意，请勿使用我们的服务。
            </motion.p>

            <motion.h2 className="text-2xl font-semibold text-[#ff7b30] mb-4" variants={fadeInOnly} custom={0.2}>1. 服务内容</motion.h2>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={0.21}>
              保之讯提供保险工作室智能管理系统，包括但不限于客户管理、订单跟踪、续保提醒、资料存档和同步小程序等功能，旨在帮助中小型保险工作室实现数字化转型和提升管理效率。您可以通过我们的网页端或小程序访问服务。
            </motion.p>

            <motion.h2 className="text-2xl font-semibold text-[#ff7b30] mb-4" variants={fadeInOnly} custom={0.3}>2. 用户资格与责任</motion.h2>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={0.31}>
              使用我们的服务，您必须：
            </motion.p>
            <motion.ul className="list-disc pl-6 mb-6 text-[#7a4a1e]" variants={fadeInOnly} custom={0.32}>
              <li>年满18周岁，并具有完全民事行为能力。</li>
              <li>提供真实、准确、完整的注册信息，并及时更新。</li>
              <li>妥善保管您的账户和密码，不得将账户转让或借给他人使用。</li>
              <li>对通过您的账户进行的所有活动和行为负责。</li>
            </motion.ul>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={0.33}>
              您同意不以任何非法或未经授权的方式使用服务，包括但不限于上传违法内容、侵犯他人权益或干扰服务正常运行。
            </motion.p>

            <motion.h2 className="text-2xl font-semibold text-[#ff7b30] mb-4" variants={fadeInOnly} custom={0.4}>3. 服务使用规则</motion.h2>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={0.41}>
              在使用服务时，您不得：
            </motion.p>
            <motion.ul className="list-disc pl-6 mb-6 text-[#7a4a1e]" variants={fadeInOnly} custom={0.42}>
              <li>上传、存储或分享任何违法、侵权或有害内容（如色情、暴力或虚假信息）。</li>
              <li>尝试破解、逆向工程或以其他方式干扰服务的安全性和完整性。</li>
              <li>使用服务进行商业用途，除非获得我们明确书面同意。</li>
              <li>通过自动化手段（如爬虫）未经授权访问或收集数据。</li>
            </motion.ul>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={0.43}>
              我们保留在发现违反本条款的行为时，暂停或终止您的服务访问权限的权利。
            </motion.p>

            <motion.h2 className="text-2xl font-semibold text-[#ff7b30] mb-4" variants={fadeInOnly} custom={0.5}>4. 知识产权</motion.h2>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={0.51}>
              服务中的所有内容（包括但不限于文字、图片、代码、设计和商标）均属保之讯或其许可方所有，受版权、商标和其他知识产权法律法规保护。您仅被授予有限的、非排他性的使用许可，仅限在遵守本条款的前提下使用服务。您不得复制、修改、分发或以其他方式使用服务内容，除非获得我们明确书面授权。
            </motion.p>

            <motion.h2 className="text-2xl font-semibold text-[#ff7b30] mb-4" variants={fadeInOnly} custom={0.6}>5. 服务可用性与免责声明</motion.h2>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={0.61}>
              我们致力于提供稳定可靠的服务，但不对以下情况承担责任：
            </motion.p>
            <motion.ul className="list-disc pl-6 mb-6 text-[#7a4a1e]" variants={fadeInOnly} custom={0.62}>
              <li>因不可抗力（如自然灾害、网络攻击）导致的服务中断。</li>
              <li>因用户设备、网络连接或不当操作导致的服务不可用。</li>
              <li>因您上传的数据丢失或损坏（建议您定期备份重要数据）。</li>
            </motion.ul>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={0.63}>
              服务按“现状”提供，我们不对服务的适用性、准确性或特定用途作出任何明示或暗示的保证。
            </motion.p>

            <motion.h2 className="text-2xl font-semibold text-[#ff7b30] mb-4" variants={fadeInOnly} custom={0.7}>6. 责任限制</motion.h2>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={0.71}>
              在法律允许的范围内，保之讯及其关联方不对因使用服务而导致的任何间接、附带、特殊或后果性损害（如数据丢失、利润损失）承担责任。我们的总责任金额不超过您在过去12个月内为服务支付的费用（如适用）。
            </motion.p>

            <motion.h2 className="text-2xl font-semibold text-[#ff7b30] mb-4" variants={fadeInOnly} custom={0.8}>7. 条款变更</motion.h2>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={0.81}>
              我们可能根据需要更新本服务条款，以反映服务变化或法律要求。更新后的条款将在本页面发布，并注明生效日期。继续使用服务即表示您同意新条款。我们建议您定期查看以了解最新内容。
            </motion.p>

            <motion.h2 className="text-2xl font-semibold text-[#ff7b30] mb-4" variants={fadeInOnly} custom={0.9}>8. 终止服务</motion.h2>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={0.91}>
              如果您违反本条款，我们可能随时暂停或终止您的服务访问权限。您也可以随时停止使用服务。终止后，您的数据可能被删除，建议您提前备份。
            </motion.p>

            <motion.h2 className="text-2xl font-semibold text-[#ff7b30] mb-4" variants={fadeInOnly} custom={1.0}>9. 适用法律与争议解决</motion.h2>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={1.01}>
              本条款受中华人民共和国法律管辖。因本条款或服务产生的任何争议，应首先通过友好协商解决；协商不成的，任何一方可向保之讯所在地（江苏省连云港市）有管辖权的人民法院提起诉讼。
            </motion.p>

            <motion.h2 className="text-2xl font-semibold text-[#ff7b30] mb-4" variants={fadeInOnly} custom={1.1}>10. 联系我们</motion.h2>
            <motion.p className="text-[#7a4a1e] mb-4" variants={fadeInOnly} custom={1.11}>
              如对本服务条款有任何疑问或需要进一步信息，请联系我们：
            </motion.p>
            <motion.ul className="list-disc pl-6 mb-6 text-[#7a4a1e]" variants={fadeInOnly} custom={1.12}>
              <li>邮箱：baozhixunvip@163.com</li>
              <li>电话：189-3662-0002</li>
              <li>地址：江苏省连云港市赣榆区青口镇东关路盐务管理局二楼201室</li>
            </motion.ul>

            <motion.p className="text-[#7a4a1e] italic" variants={fadeInOnly} custom={1.2}>
              本服务条款最后更新日期：2025年5月18日
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
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