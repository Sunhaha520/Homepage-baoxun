"use client";
import React, { useState, useRef, useEffect } from "react";

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "您好，我是保之讯AI客服小讯，有什么可以帮您？你可以问我们任何产品相关的内容。",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // 聊天滚动到底部
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        chatWindowRef.current?.scrollTo(0, chatWindowRef.current.scrollHeight);
      }, 100);
    }
  }, [messages, open]);

  // 发送消息
  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg],
        }),
      });
      const data = await res.json();
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: "抱歉，AI服务暂时不可用。" },
      ]);
    }
    setLoading(false);
  }

  // 清空对话
  function clearChat() {
    setMessages([
      {
        role: "assistant",
        content:
          "您好，我是保之讯AI客服小讯，有什么可以帮您？任何产品相关的内容我都会解答哦。",
      },
    ]);
  }

  // 眼睛闪烁动画
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    if (!open) {
      const timer = setInterval(() => setBlink((b) => !b), 800);
      return () => clearInterval(timer);
    }
  }, [open]);

  return (
    <>
      {/* 悬浮按钮 */}
       {/* 悬浮按钮 */}
      {!open && (
        <button
          className="ai-float-btn"
          onClick={() => setOpen(true)}
          aria-label="AI客服"
        >
          <span className="ai-float-btn-text">AI</span>
        </button>
      )}
      {/* 悬浮窗 */}
      {open && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <span>保之讯AI客服小讯</span>
            <div>
              <button onClick={clearChat} className="ai-chat-clear">
                清空对话
              </button>
              <button
                onClick={() => setOpen(false)}
                className="ai-chat-close"
                title="关闭"
              >
                ×
              </button>
            </div>
          </div>
          <div className="ai-chat-body" ref={chatWindowRef}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`ai-msg-bubble ${
                  msg.role === "user" ? "ai-msg-user" : "ai-msg-assistant"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="ai-msg-bubble ai-msg-assistant">
                AI正在输入...
              </div>
            )}
          </div>
          <div className="ai-chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="请输入您的问题..."
              disabled={loading}
              style={{
                color: "#222",
                background: "#fffbe9",
                fontWeight: 500,
                fontSize: "16px",
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{ fontWeight: 600 }}
            >
              发送
            </button>
          </div>
        </div>
      )}
      {/* 样式 */}
      <style jsx>{`
        @media (max-width: 639px) {
          .ai-float-btn {
          display: none !important;
          }
       }
        .ai-float-btn {
          position: fixed;
          right: 40px;
          bottom: 40px;
          z-index: 10000;
          background: #111;
          border: none;
          cursor: pointer;
          border-radius: 50%;
          padding: 0;
          width: 54px;
          height: 54px;
          box-shadow: 0 4px 24px rgba(80, 40, 0, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .ai-float-btn:hover {
          background: #222;
        }
        .ai-float-btn-text {
          color: #fff;
          font-size: 22px;
          font-weight: bold;
          letter-spacing: 2px;
          user-select: none;
        }
        .ai-chat-window {
          position: fixed;
          right: 40px;
          bottom: 40px;
          width: 370px;
          height: 520px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(94, 50, 6, 0.18);
          z-index: 10001;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-size: 16px;
        }
        .ai-chat-header {
          background:rgb(7, 7, 7);
          color: #fff;
          padding: 14px 18px;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ai-chat-close {
          background: none;
          border: none;
          color: #fff;
          font-size: 26px;
          cursor: pointer;
          margin-left: 8px;
        }
        .ai-chat-clear {
          background: #ff7b30;
          border: none;
          color: #fff;
          font-size: 14px;
          border-radius: 8px;
          padding: 3px 12px;
          margin-right: 6px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ai-chat-clear:hover {
          background: #ff9b4a;
        }
        .ai-chat-body {
          flex: 1;
          overflow-y: auto;
          padding: 18px 14px;
          background: #fffbe9;
          display: flex;
          flex-direction: column;
          scrollbar-width: none; 
        }
        .ai-chat-body::-webkit-scrollbar {
          display: none; /* Chrome/Safari/Edge */
        }
        .ai-msg-bubble {
          max-width: 80%;
          padding: 10px 16px;
          border-radius: 18px;
          margin-bottom: 14px;
          word-break: break-word;
          font-size: 15.5px;
          line-height: 1.7;
          box-shadow: 0 2px 8px #ff7b3022;
        }
        .ai-msg-user {
          align-self: flex-end;
          background: linear-gradient(90deg, #ffb870 0%, #ff7b30 100%);
          color: #fff;
          border-bottom-right-radius: 6px;
        }
        .ai-msg-assistant {
          align-self: flex-start;
          background: #fff;
          color: #7a4a1e;
          border-bottom-left-radius: 6px;
          border: 1px solid #ffe1c2;
        }
        .ai-chat-input {
          display: flex;
          border-top: 1px solid #ffe1c2;
          background: #fff3e6;
          padding: 10px 10px 10px 14px;
        }
        .ai-chat-input input {
          flex: 1;
          border: none;
          padding: 10px 12px;
          outline: none;
          font-size: 16px;
          background: #fffbe9;
          color: #222;
          border-radius: 8px;
          margin-right: 10px;
        }
        .ai-chat-input input:disabled {
          background: #f5e6d6;
        }
        .ai-chat-input button {
          background: #ff7b30;
          color: #fff;
          border: none;
          padding: 0 22px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 8px;
          font-weight: 600;
          transition: background 0.2s;
        }
        .ai-chat-input button:disabled {
          background: #ffd2b3;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}