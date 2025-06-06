import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

// 读取单个文章 markdown 文件
function getArticle() {
  const filePath = path.join(process.cwd(), "app/data/product.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    title: data.title || "文章",
    content,
  };
}

export default function ArticlePage() {
  const article = getArticle();

  return (
    <div className="min-h-screen flex flex-col font-inter bg-[#fff3e6]">
      {/* 头部导航 */}
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
            <Link href="https://www.baozhixun.cn/crm" className="text-[#7a4a1e] hover:text-[#ff7b30] transition-colors font-medium text-lg">
              CRM系统
            </Link>
          </nav>
        </div>
      </header>
      {/* 文章内容 */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 border-2 border-[#ff7b30]">
            <h1 className="text-3xl font-bold text-[#ff7b30] mb-6">{article.title}</h1>
            <div className="prose max-w-none text-[#7a4a1e]">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
      {/* 页脚 */}
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
    </div>
  );
}