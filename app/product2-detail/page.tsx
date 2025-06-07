import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from "next/image";

// 异步读取单个文章 markdown 文件
async function getArticle() {
  const filePath = path.join(process.cwd(), "app/data/product1.md");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    title: data.title || "文章",
    content,
  };
}

// 自定义 Markdown 图片渲染，懒加载且居中
function MarkdownImage(props: any) {
  return (
    <Image
      src={props.src}
      alt={props.alt || ""}
      width={600}
      height={400}
      className="block mx-auto my-8"
      style={{ maxWidth: "100%", height: "auto" }}
      loading="lazy"
    />
  );
}

export default async function ArticlePage() {
  const article = await getArticle();

  return (
    <div className="min-h-screen flex flex-col font-inter bg-[#fff3e6]">
      {/* 头部导航 */}
      <Header/>
      {/* 文章内容 */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 border-2 border-[#ff7b30]">
            {/* 标题和内容都异步加载 */}
            <h1 className="text-3xl font-bold text-[#ff7b30] mb-6">{article.title}</h1>
            <div className="prose max-w-none text-[#7a4a1e]">
              <ReactMarkdown
                components={{
                  img: MarkdownImage,
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
      {/* 页脚 */}
      <Footer/>
    </div>
  );
}