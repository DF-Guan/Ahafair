export const luxuryGoldTheme = `/* 黑金奢华风格 */
#ahafair {
    padding: 5px 22px;
    max-width: 677px;
    margin: 0 auto;
    /* 强制宋体/衬线体，移动端显示优雅字体的关键 */
    font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif;
    color: #222;
    background-color: transparent;
    /* 透明背景，兼容微信深色模式 */
    word-break: break-word;
}

/* 正文 - 疏朗的行间距 */
#ahafair p {
    margin: 30px 0;
    line-height: 2.0;
    text-align: justify;
    color: #444;
    font-size: 16px;
}

/* 一级标题 - 极简留白 */
#ahafair h1 {
    margin: 70px 0 50px;
    text-align: center;
}

#ahafair h1 .content {
    font-size: 26px;
    font-weight: normal;
    color: #000;
    display: block;
    letter-spacing: 3px;
    border-bottom: 1px solid #000;
    /* 纯黑细线 */
    padding-bottom: 20px;
}

#ahafair h1 .prefix,
#ahafair h1 .suffix {
    display: none;
}

/* 二级标题 - 金色边框盒子 */
#ahafair h2 {
    margin: 50px 0 30px;
    text-align: center;
}

#ahafair h2 .content {
    display: inline-block;
    font-size: 19px;
    font-weight: normal;
    color: #9E8045;
    /* 复古金 */
    border-top: 1px solid #9E8045;
    border-bottom: 1px solid #9E8045;
    padding: 10px 24px;
    letter-spacing: 1px;
}

#ahafair h2 .prefix,
#ahafair h2 .suffix {
    display: none;
}

/* 三级标题 - 纯黑大写感 */
#ahafair h3 {
    margin: 40px 0 20px;
    text-align: center;
}

#ahafair h3 .content {
    font-size: 17px;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 1px;
}

#ahafair h3 .prefix,
#ahafair h3 .suffix {
    display: none;
}

/* 四级标题 - 金色小标 */
#ahafair h4 {
    margin: 30px 0 15px;
    text-align: center;
}

#ahafair h4 .content {
    font-size: 16px;
    font-weight: normal;
    color: #9E8045;
    border-bottom: 1px solid #eee;
    padding-bottom: 4px;
}

#ahafair h4 .prefix,
#ahafair h4 .suffix {
    display: none;
}

/* 引用 - 居中衬线斜体 */
#ahafair .multiquote-1,
#ahafair .multiquote-2,
#ahafair .multiquote-3 {
    margin: 40px 0;
    padding: 20px 30px;
    background: #fff;
    /* 保持纯白 */
    border: none;
    text-align: center;
    border-left: none;
    /* 去掉默认左边框 */
}

#ahafair .multiquote-1 p {
    color: #666;
    font-style: italic;
    font-family: serif;
    font-size: 15px;
    line-height: 1.8;
}

#ahafair .multiquote-2 {
    margin: 38px 0;
    padding: 18px 28px;
    background: #fff;
    border: none;
    text-align: center;
    border-left: 2px solid #9E8045;
}

#ahafair .multiquote-2 p {
    color: #666;
    font-style: italic;
    font-family: serif;
    font-size: 15px;
}

#ahafair .multiquote-3 {
    margin: 36px 0;
    padding: 16px 26px;
    background: #fafafa;
    border: none;
    text-align: center;
    border-left: 1px solid #9E8045;
}

#ahafair .multiquote-3 p {
    color: #666;
    font-style: italic;
    font-family: serif;
    font-size: 15px;
}

/* 列表 - 精致的金点 */
#ahafair ul {
    list-style: square;
    /* 方块比圆点更时尚 */
    padding-left: 20px;
    margin: 20px 0;
    color: #9E8045;
}

#ahafair ul li {
    margin-bottom: 10px;
}

#ahafair li section {
    color: #444;
}

/* 有序列表 */
#ahafair ol {
    list-style: decimal;
    padding-left: 20px;
    margin: 20px 0;
    color: #9E8045;
}

#ahafair ul ul {
    list-style-type: circle;
    color: #9E8045;
    margin-top: 8px;
}

#ahafair ol ol {
    list-style-type: lower-roman;
    color: #9E8045;
}

#ahafair ol li {
    margin-bottom: 10px;
}

#ahafair ol li section {
    color: #444;
}

/* 链接 - 金色细线 */
#ahafair a {
    color: #000;
    border-bottom: 1px solid #9E8045;
    text-decoration: none;
    transition: opacity 0.2s;
}

/* 加粗 - 金色高亮 */
#ahafair strong {
    color: #9E8045;
    font-weight: bold;
    margin: 0 2px;
}

/* 斜体 */
#ahafair em {
    color: #9E8045;
    font-style: italic;
}

/* 加粗斜体 */
#ahafair em strong {
    color: #9E8045;
    font-weight: bold;
}

/* 高亮 - 淡金背景 */
#ahafair mark {
    background: rgba(158, 128, 69, 0.15);
    color: #9E8045;
    padding: 2px 6px;
    border-bottom: 1px solid rgba(158, 128, 69, 0.3);
}

/* 删除线 */
#ahafair del {
    text-decoration: line-through;
    color: #999;
    text-decoration-color: #9E8045;
}

/* 分隔线 - 极简短线 */
#ahafair hr {
    margin: 60px auto;
    height: 1px;
    background: #9E8045;
    width: 40px;
    border: none;
}

/* 图片 - 纯净留白 */
#ahafair img {
    display: block;
    margin: 50px auto;
    width: 100%;
    /* 极淡的阴影，几乎看不见，增加一点立体感 */
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
}

#ahafair figcaption {
    color: #999;
    font-size: 12px;
    margin-top: 15px;
    text-align: center;
    font-style: italic;
    font-family: serif;
}

/* 
 * 行内代码 - 香槟金吊牌风格 (修复重点) 
 * 极淡的金色背景 + 细边框，精致感拉满
 */
#ahafair p code,
#ahafair li code {
    color: #9E8045;
    /* 深金色文字 */
    background: rgba(158, 128, 69, 0.06);
    /* 6%透明度的金色背景 */
    border: 1px solid rgba(158, 128, 69, 0.2);
    /* 20%透明度的金色边框 */
    padding: 2px 6px;
    margin: 0 4px;
    border-radius: 2px;
    font-size: 14px;
    font-family: serif;
    /* 保持衬线体风格 */
}

/* 代码块 - 极简黑白 */
/* 代码块 - 注意：不要设置 color，让语法高亮主题控制文字颜色 */
#ahafair pre code.hljs {
    display: block;
    padding: 20px;
    background: #fcfcfc;
    /* 接近纯白 */
    /* color 由 .hljs 语法高亮主题控制 */
    font-size: 13px;
    line-height: 1.6;
    border: 1px solid #eee;
    font-family: serif;
    /* 特意使用衬线体显示代码，极具艺术感 */
    overflow-x: auto;
    white-space: pre;
  min-width: max-content;
}

/* 如果没有语法高亮，设置默认深灰色 */
#ahafair pre code:not(.hljs) {
    color: #333;
    background: #fcfcfc;
    border: 1px solid #eee;
}

/* 表格 - 极简线条 */
#ahafair table {
    width: 100%;
    border-collapse: collapse;
    margin: 40px 0;
    font-size: 14px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
}

#ahafair table tr th {
    color: #9E8045;
    font-weight: normal;
    border-bottom: 1px solid #eee;
    padding: 12px 10px;
    text-align: center;
}

#ahafair table tr td {
    border-bottom: 1px solid #eee;
    padding: 12px 10px;
    color: #555;
    text-align: center;
}

/* 脚注 */
#ahafair .footnote-word,
#ahafair .footnote-ref {
    color: #9E8045;
}

#ahafair .footnotes-sep {
    border-top: 1px solid #eee;
    padding-top: 20px;
    margin-top: 60px;
    font-size: 12px;
    color: #ccc;
    text-align: center;
}

#ahafair .footnote-num {
    font-weight: bold;
    color: #9E8045;
    margin-right: 4px;
}

#ahafair .footnote-item p {
    color: #999;
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

/* 提示块 - 黑金奢华风格 */
#ahafair .callout {
    margin: 40px 0;
    padding: 20px 30px;
    background: #fff;
    border: 1px solid rgba(158, 128, 69, 0.3);
    border-radius: 2px;
}

#ahafair .callout-title {
    font-weight: normal;
    margin-bottom: 10px;
    color: #9E8045;
    font-family: serif;
    letter-spacing: 1px;
    font-size: 15px;
}

#ahafair .callout-icon { margin-right: 8px;
    margin-right: 6px;
}

#ahafair .callout-note { border-left: 3px solid #9E8045; }
#ahafair .callout-tip { border-left: 3px solid #9E8045; }
#ahafair .callout-important { border-left: 3px solid #9E8045; }
#ahafair .callout-warning { border-left: 3px solid #D98C45; }
#ahafair .callout-caution { border-left: 3px solid #B33D25; }

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
