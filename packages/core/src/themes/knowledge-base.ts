export const knowledgeBaseTheme = `/* 知识库风格 */
#ahafair {
    padding: 5px 24px;
    max-width: 677px;
    margin: 0 auto;
    /* 使用系统无衬线字体，保持干净利落 */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "PingFang SC", sans-serif;
    color: #37352F;
    /* 经典的笔记深灰色 */
    background-color: transparent;
    /* 透明背景，兼容微信深色模式 */
    word-break: break-word;
}

/* 段落 - 紧凑但舒适 */
#ahafair p {
    margin-top: 16px;
    margin-bottom: 16px;
    line-height: 1.75;
    letter-spacing: 0.2px;
    text-align: justify;
    color: #37352F;
    font-size: 16px;
}

/* 
 * 一级标题 - 页面标题感
 * 就像笔记页面的最顶端标题
 */
#ahafair h1 {
    margin-top: 50px;
    margin-bottom: 40px;
    text-align: left;
    border-bottom: 1px solid #E3E2E0;
    /* 极细的分割线 */
    padding-bottom: 20px;
}

#ahafair h1 .content {
    font-size: 28px;
    font-weight: 700;
    color: #37352F;
    display: inline-block;
    line-height: 1.2;
}

#ahafair h1 .prefix,
#ahafair h1 .suffix {
    display: none;
}

/* 
 * 二级标题 - 区块分割
 * 带有浅灰色背景条，类似 Notion 的 H1 block
 */
#ahafair h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: left;
}

#ahafair h2 .content {
    display: block;
    /* 占满整行 */
    font-size: 22px;
    font-weight: 600;
    color: #37352F;
    padding: 8px 12px;
    background-color: #F7F6F3;
    /* 经典的浅灰底色 */
    border-radius: 4px;
    line-height: 1.3;
}

#ahafair h2 .prefix,
#ahafair h2 .suffix {
    display: none;
}

/* 
 * 三级标题 - 重点标记
 * 像是给文字加了颜色标记
 */
#ahafair h3 {
    margin-top: 30px;
    margin-bottom: 12px;
}

#ahafair h3 .content {
    font-size: 18px;
    font-weight: 600;
    color: #37352F;
    display: inline-block;
    /* 底部局部高亮 */
    border-bottom: 3px solid #FDECC8;
    /* 奶黄色 */
    padding-bottom: 2px;
}

#ahafair h3 .prefix,
#ahafair h3 .suffix {
    display: none;
}

/* 四级标题 - 小节 */
#ahafair h4 {
    margin-top: 24px;
    margin-bottom: 8px;
    text-align: left;
}

#ahafair h4 .content {
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    color: #EB5757;
    /* 醒目的红色，用于警示或强调 */
    line-height: 1.4;
}

#ahafair h4 .prefix,
#ahafair h4 .suffix {
    display: none;
}

/* 
 * 列表 - 结构化缩进
 */
#ahafair ul {
    list-style-type: disc;
    padding-left: 24px;
    margin: 16px 0;
    color: #37352F;
}

#ahafair ul li {
    margin-bottom: 8px;
    line-height: 1.7;
}

#ahafair li section {
    color: #37352F;
    font-size: 16px;
}

/* 有序列表 */
#ahafair ol {
    list-style-type: decimal;
    padding-left: 24px;
    margin: 16px 0;
    color: #37352F;
    font-weight: 600;
}

#ahafair ul ul {
    list-style-type: circle;
    margin-top: 6px;
}

#ahafair ol ol {
    list-style-type: lower-alpha;
}

#ahafair ol li {
    margin-bottom: 8px;
    line-height: 1.7;
}

#ahafair ol li section {
    color: #37352F;
    font-weight: normal;
    font-size: 16px;
}

/* 
 * 引用 - Callout 提示框风格
 * 这是这款主题的灵魂
 */
#ahafair .multiquote-1,
#ahafair .multiquote-2,
#ahafair .multiquote-3 {
    margin: 24px 0;
    padding: 16px 16px 16px 20px;
    background-color: #F1F1EF;
    /* 默认浅灰背景 */
    border: none;
    /* 无边框 */
    border-radius: 4px;
    border-left: 4px solid #37352F;
    /* 左侧深色强提示 */
    overflow: visible !important;
}

/* 针对不同层级引用，给予不同颜色，模拟 Info/Warning */
#ahafair .multiquote-2 {
    background-color: #E7F3F8;
    /* 浅蓝背景 (Info) */
    border-left-color: #2D9CDB;
}

#ahafair .multiquote-3 {
    background-color: #FDF5F2;
    /* 浅橙背景 (Warning) */
    border-left-color: #F2994A;
}

#ahafair .multiquote-1 p,
#ahafair .multiquote-2 p,
#ahafair .multiquote-3 p {
    margin: 0;
    color: #37352F;
    font-size: 15px;
    line-height: 1.6;
}

/* 链接 - 简洁下划线 */
#ahafair a {
    color: #37352F;
    text-decoration: none;
    border-bottom: 1px solid #999;
    /* 灰色下划线 */
    font-weight: 500;
    transition: border-color 0.2s;
}

/* 
 * 加粗 - 黄色高光笔
 * 完全复刻 Notion 的 Highlight 效果
 */
#ahafair strong {
    color: #37352F;
    font-weight: 600;
    background-color: #FDECC8;
    /* 高亮黄 */
    padding: 2px 4px;
    margin: 0 2px;
    border-radius: 3px;
}

/* 斜体 */
#ahafair em {
    color: #37352F;
    font-style: italic;
    opacity: 0.7;
}

#ahafair em strong {
    color: #37352F;
    opacity: 1;
}

/* 高亮 - 黄色标记 */
#ahafair mark {
    background: #FDECC8;
    color: #37352F;
    padding: 2px 4px;
    border-radius: 3px;
}

/* 删除线 */
#ahafair del {
    text-decoration: line-through;
    color: #999;
}

/* 分隔线 */
#ahafair hr {
    margin: 40px auto;
    border: 0;
    height: 1px;
    background-color: #E3E2E0;
    /* 极浅灰 */
    width: 100%;
}

/* 图片 - 干净无阴影 */
#ahafair img {
    display: block;
    margin: 30px auto;
    width: 100%;
    border-radius: 4px;
    box-shadow: none;
    /* 笔记风格通常不需要阴影 */
    border: 1px solid #E3E2E0;
    /* 只有一圈细线 */
}

#ahafair figcaption {
    margin-top: 8px;
    text-align: center;
    color: #999;
    font-size: 14px;
}

/* 
 * 行内代码 - 经典的红字灰底
 */
#ahafair p code,
#ahafair li code {
    color: #EB5757;
    /* 红色文字 */
    background: rgba(135, 131, 120, 0.15);
    /* 半透明灰底 */
    border: none;
    padding: 3px 6px;
    margin: 0 4px;
    border-radius: 4px;
    font-size: 14px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
}

/* 代码块 - 极简灰 */
/* 代码块 - 注意：不要设置 color，让语法高亮主题控制文字颜色 */
#ahafair pre code.hljs {
    display: block;
    padding: 20px;
    background: #F7F6F3;
    /* color 由 .hljs 语法高亮主题控制 */
    font-size: 13px;
    line-height: 1.6;
    border-radius: 4px;
    font-family: "SFMono-Regular", Consolas, Menlo, monospace;
    overflow-x: auto;
    white-space: pre;
  min-width: max-content;
    border: none;
}

/* 如果没有语法高亮，设置默认深灰色 */
#ahafair pre code:not(.hljs) {
    color: #37352F;
    background: #F7F6F3;
}

/* 表格 - 数据库风格 (Database) */
#ahafair table {
    width: 100%;
    border-collapse: collapse;
    margin: 30px 0;
    font-size: 14px;
    border: 1px solid #E3E2E0;
    border-radius: 0;
}

#ahafair table tr th {
    background: #F7F6F3;
    color: #37352F;
    font-weight: 600;
    border: 1px solid #E3E2E0;
    padding: 10px 12px;
    text-align: left;
}

#ahafair table tr td {
    border: 1px solid #E3E2E0;
    padding: 10px 12px;
    color: #37352F;
    background: #fff;
}

/* 脚注 */
#ahafair .footnote-word,
#ahafair .footnote-ref {
    color: #37352F;
    text-decoration: underline;
}

#ahafair .footnotes-sep {
    border-top: 1px solid #E3E2E0;
    padding-top: 20px;
    margin-top: 50px;
    font-size: 12px;
    color: #999;
}

#ahafair .footnote-num {
    font-weight: bold;
    color: #37352F;
    margin-right: 4px;
}

#ahafair .footnote-item p {
    color: #666;
    font-size: 12px;
    margin: 4px 0;
}

/* 公式 */
#ahafair .block-equation svg {
    max-width: 100% !important;
}

#ahafair .inline-equation svg {
    max-width: 100%;
    vertical-align: middle;
}


/* 提示块 - 知识库风格 */
#ahafair .callout {
    margin: 24px 0;
    padding: 16px 16px 16px 20px;
    border-radius: 4px;
    border-left: 4px solid #37352F;
}

#ahafair .callout-title {
    font-weight: 600;
    margin-bottom: 8px;
    color: #37352F;
    font-size: 15px;
}

#ahafair .callout-icon { margin-right: 8px;
    margin-right: 6px;
}

#ahafair .callout-note { 
    background: #F1F1EF;
    border-left-color: #37352F;
}

#ahafair .callout-tip { 
    background: #FDF5F2;
    border-left-color: #F2994A;
}

#ahafair .callout-important { 
    background: #E7F3F8;
    border-left-color: #2D9CDB;
}

#ahafair .callout-warning { 
    background: #FFF4E5;
    border-left-color: #FF9800;
}

#ahafair .callout-caution { 
    background: #FFEBEE;
    border-left-color: #F44336;
}

/* Imageflow CSS */
#ahafair .imageflow-layer1 {
  margin-top: 1em;
  margin-bottom: 0.5em;
  /* white-space: normal; */
  border: 0px none;
  padding: 0px;
  overflow: hidden;
}

#ahafair .imageflow-layer2 {
  white-space: nowrap;
  width: 100%;
  overflow-x: scroll;
}

#ahafair .imageflow-layer3 {
  display: inline-block;
  word-wrap: break-word;
  white-space: normal;
  vertical-align: top;
  width: 80%;
  margin-right: 10px;
  flex-shrink: 0;
}

#ahafair .imageflow-img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  border-radius: 4px;
}

#ahafair .imageflow-caption {
  text-align: center;
  margin-top: 0px;
  padding-top: 0px;
  color: #888;
}
`;
