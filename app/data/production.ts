export interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  features: string[];
  learnMoreUrl?: string;
}

export const products: Product[] = [
  {
    id: 'product1',
    title: '保险工作室客户管理系统',
    subtitle: '专为中小型保险工作室设计',
    image: '/imgs/1.webp',
    features: [
      '全周期订单管理：记录、跟踪保单状态，支持一键续保。',
      '台账批量处理：往年数据一键导入/导出，重点客户标记追踪。',
      '资料归档下载：承保材料批量下载，便于存档查阅。',
      '智能提醒：保单时效倒计时，直观醒目；多节点自动通知，避免漏保。',
      '任务流自动化：续保后自动生成新任务，提升效率。',
    ],
    learnMoreUrl: 'product1-detail',
  },
  {
    id: 'product2',
    title: '客户管理系统同步小程序',
    subtitle: '移动录入，随行随办',
    image: '/imgs/2.webp',
    features: [
      '移动台账录入：随时随地录入数据，支持快速采集与同步。',
      '智能回填：自动识别行驶证、身份证等证件信息，减少手动输入。',
      '资料存档：承保材料拍照上传，自动分类管理。',
      '多维度检索：支持影像归类、关键词等多方式快速查询。',
      '实时同步：数据与网页端即时互通，保单时效随时可得。',
    ],
    learnMoreUrl: 'product2-detail',
  },
];