export const basicTheme = `/* 默认样式，最佳实践 */

/* 全局属性 */
#ahafair {
  font-size: 16px;
  color: #000000;
  padding: 0 8px;
  line-height: 1.6;
  word-spacing: 0px;
  letter-spacing: 0px;
  word-break: break-word;
  word-wrap: break-word;
  text-align: left;
  font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', 'Microsoft YaHei', '微软雅黑', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

/* 段落 */
#ahafair p {
  font-size: 16px;
  margin: 0;
  line-height: 26px;
  color: #000000;
}

/* 标题 */
#ahafair h1,
#ahafair h2,
#ahafair h3,
#ahafair h4,
#ahafair h5,
#ahafair h6 {
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 0px;
  font-weight: bold;
  color: #000000;
}
#ahafair h1 {
  font-size: 24px;
}
#ahafair h2 {
  font-size: 22px;
}
#ahafair h3 {
  font-size: 20px;
}
#ahafair h4 {
  font-size: 18px;
}
#ahafair h5 {
  font-size: 16px;
}
#ahafair h6 {
  font-size: 16px;
}

#ahafair h1 .prefix,
#ahafair h2 .prefix,
#ahafair h3 .prefix,
#ahafair h4 .prefix,
#ahafair h5 .prefix,
#ahafair h6 .prefix {
  display: none;
}

#ahafair h1 .suffix,
#ahafair h2 .suffix,
#ahafair h3 .suffix,
#ahafair h4 .suffix,
#ahafair h5 .suffix,
#ahafair h6 .suffix {
  display: none;
}

/* 列表 */
#ahafair ul,
#ahafair ol {
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 25px;
  color: #000000;
}
#ahafair ul {
  list-style-type: disc;
}
#ahafair ul ul {
  list-style-type: square;
}

#ahafair ol {
  list-style-type: decimal;
}

#ahafair li section {
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 26px;
  text-align: left;
  color: #010101; /* 使用接近黑色的 HEX，避免微信吞掉纯黑色 */
  font-weight: 500;
}

/* 引用 */
#ahafair blockquote {
  border: none;
}

#ahafair .multiquote-1 {
  display: block;
  font-size: 0.9em;
  overflow: auto;
  overflow-scrolling: touch;
  border-left: 3px solid rgba(0, 0, 0, 0.4);
  background: rgba(0, 0, 0, 0.05);
  color: #6a737d;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}

#ahafair .multiquote-1 p {
  margin: 0px;
  color: #000000;
  line-height: 26px;
}

#ahafair .multiquote-2 {
  box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}

#ahafair .multiquote-3 {
  box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}

#ahafair .multiquote-3 p {
  text-align: center;
}

#ahafair .multiquote-3 h3 {
  text-align: center;
}

#ahafair .table-of-contents a {
  border: none;
  color: #000000;
  font-weight: normal;
}

/* 链接 */
#ahafair a {
  text-decoration: none;
  color: #1e6bb8;
  word-wrap: break-word;
  font-weight: bold;
  border-bottom: 1px solid #1e6bb8;
}

/* 加粗 */
#ahafair strong {
  font-weight: bold;
  color: #000000;
}

/* 斜体 */
#ahafair em {
  font-style: italic;
  color: #000000;
}

/* 加粗斜体 */
#ahafair em strong {
  font-weight: bold;
  color: #000000;
}

/* 删除线 */
#ahafair del {
  font-style: italic;
  color: #000000;
}

/* 下划线 */
#ahafair u {
  text-decoration: underline;
  text-underline-offset: 0.18em;
  text-decoration-thickness: 1px;
}

/* 分隔线 */
#ahafair hr {
  height: 1px;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-top: 1px solid black;
}

/* 代码块容器 */
#ahafair pre {
  margin-top: 10px;
  margin-bottom: 10px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

#ahafair pre.custom {
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  overflow-x: auto;
}

#ahafair pre code {
  display: block;
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  border-radius: 0px;
  font-size: 12px;
  white-space: pre;
  min-width: max-content;
  -webkit-overflow-scrolling: touch;
}

#ahafair pre code span {
  line-height: 26px;
}

/* 行内代码 */
#ahafair p code,
#ahafair li code {
  font-size: 14px;
  word-wrap: break-word;
  padding: 2px 4px;
  border-radius: 4px;
  margin: 0 2px;
  color: #1e6bb8;
  background-color: rgba(27,31,35,.05);
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  word-break: break-all;
}

/* 图片 */
#ahafair img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}

/* 图片 */
#ahafair figure {
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* 图片描述文字 */
#ahafair figcaption {
  margin-top: 5px;
  text-align: center;
  color: #888;
  font-size: 14px;
}


/* 表格容器 */
#ahafair .table-container{
  overflow-x: auto;
}

/* 表格 */
#ahafair table {
  display: table;
  text-align: left;
}
#ahafair tbody {
  border: 0;
}

#ahafair table tr {
  border: 0;
  border-top: 1px solid #ccc;
  background-color: #ffffff;
}

#ahafair table tr:nth-child(2n) {
  background-color: #F8F8F8;
}

#ahafair table tr th,
#ahafair table tr td {
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 5px 10px;
  text-align: left;
}

#ahafair table tr th {
  font-weight: bold;
  background-color: #f0f0f0;
}

/* 表格最小列宽4个汉字 */
#ahafair table tr th:nth-of-type(n),
#ahafair table tr td:nth-of-type(n){
  min-width:85px;
}

#ahafair .footnote-word {
  color: #1e6bb8;
  font-weight: bold;
}

#ahafair .footnote-ref {
  color: #1e6bb8;
  font-weight: bold;
}

#ahafair .footnote-item {
  display: flex;
}

#ahafair .footnote-num {
  display: inline;
  width: 10%; /*神奇，50px就不可以*/
  background: none;
  font-size: 80%;
  opacity: 0.6;
  line-height: 26px;
  font-family: ptima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#ahafair .footnote-item p {
  display: inline;
  font-size: 14px;
  width: 90%;
  padding: 0px;
  margin: 0;
  line-height: 26px;
  color: #000000;
  word-break:break-all;
  width: calc(100%-50)
}

#ahafair sub, sup {
  line-height: 0;
}

#ahafair .footnotes-sep:before {
  content: "参考资料";
  display: block;
}

/* 解决公式问题 */
#ahafair .block-equation {
  display:block;
  text-align: center;
  overflow: auto;
  display: block;
  -webkit-overflow-scrolling: touch;
}

#ahafair .block-equation svg {
  max-width: 300% !important;
  -webkit-overflow-scrolling: touch;
}

#ahafair .inline-equation {
}

#ahafair .inline-equation svg {
}

#ahafair .imageflow-layer1 {
  margin-top: 1em;
  margin-bottom: 0.5em;
  white-space: normal;
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

#ahafair .nice-suffix-juejin-container {
  margin-top: 20px !important;
}

#ahafair figure a {
  border: none;
}

#ahafair figure a img {
  margin: 0px;
}

#ahafair figure {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 图片链接嵌套 */
#ahafair figure a {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 图片链接嵌套，图片解释 */
#ahafair figure a + figcaption {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -35px;
  background: rgba(0,0,0,0.7);
  color: #ffffff;
  line-height: 35px;
  z-index: 20;
}

#ahafair .callout {
  margin: 24px 0;
  padding: 18px 20px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  box-shadow: 0 12px 25px rgba(15, 23, 42, 0.08);
}

#ahafair .callout-title {
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 0;
  letter-spacing: 0.05em;
}

#ahafair .callout-icon { margin-right: 8px;
  font-size: 18px;
}

#ahafair .callout-note { border-left: 4px solid #6366f1; background: #f5f5ff; }
#ahafair .callout-tip { border-left: 4px solid #10b981; background: #ecfdf5; }
#ahafair .callout-important { border-left: 4px solid #8b5cf6; background: #f5f3ff; }
#ahafair .callout-warning { border-left: 4px solid #f59e0b; background: #fffbeb; }
#ahafair .callout-caution { border-left: 4px solid #ef4444; background: #fff5f5; }


#ahafair .task-list-item {
  list-style: none;
  margin-left: -1.2em;
  margin-bottom: 6px;
  display: flex;
  gap: 0;
  align-items: flex-start;
}

#ahafair .task-list-item input[type='checkbox'] {
  margin-top: 4px;
  pointer-events: none;
}
`;
