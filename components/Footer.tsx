import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
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
  );
}