import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const apiKey = process.env.SILICONFLOW_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ reply: "AI服务未配置API密钥。" }, { status: 500 });
  }

  // 内置系统prompt
  const systemPrompt = `你是保之讯AI客服小讯，你的作用是回答公司产品介绍和公司情况，尽量用精简的段落回答，不要用markdown语法，竟可能干脆利落回答，不要过长。

我们的产品：
1.保险工作室客户管理系统
功能如下：
全周期订单管理：记录、跟踪保单状态，支持一键续保。
台账批量处理：往年数据一键导入/导出，重点客户标记追踪。
资料归档下载：承保材料批量下载，便于存档查阅。
智能提醒：保单时效倒计时，直观醒目；多节点自动通知，避免漏保。
任务流自动化：续保后自动生成新任务，提升效率。

2.客户管理系统同步小程序
功能如下：
移动台账录入：随时随地录入数据，支持快速采集与同步。
智能回填：自动识别行驶证、身份证等证件信息，减少手动输入。
资料存档：承保材料拍照上传，自动分类管理。
多维度检索：支持影像归类、关键词等多方式快速查询。
实时同步：数据与网页端即时互通，保单时效随时可得。

我们的宗旨：助力中小保险工作室数字化转型，提升客户管理效率

我们地址：江苏省连云港市赣榆区青口镇东关路盐务管理局二楼201室
联系方式：baozhixunvip@163.com    189-3662-0002`;

  // 注入系统prompt
  const fullMessages = [
    { role: "system", content: systemPrompt },
    ...messages,
  ];

  const body = {
    model: "Qwen/Qwen2.5-7B-Instruct",
    messages: fullMessages,
    stream: false,
    max_tokens: 512,
    enable_thinking: false,
    thinking_budget: 4096,
    min_p: 0.05,
    stop: null,
    temperature: 0.7,
    top_p: 0.7,
    top_k: 50,
    frequency_penalty: 0.5,
    n: 1,
    response_format: { type: "text" },
    tools: [
      {
        type: "function",
        function: {
          description: "",
          name: "",
          parameters: {},
          strict: false,
        },
      },
    ],
  };

  const resp = await fetch("https://api.siliconflow.cn/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    return NextResponse.json({ reply: "AI服务请求失败。" }, { status: 500 });
  }
  const data = await resp.json();
  const reply = data.choices?.[0]?.message?.content || "AI无回复";
  return NextResponse.json({ reply });
}