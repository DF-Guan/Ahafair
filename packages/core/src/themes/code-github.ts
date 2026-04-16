export const codeGithubTheme = `/*
github.com style (c) Vasily Polovnyov <vast@whiteants.net>
*/

/* 代码块样式 - 需要添加 #ahafair 前缀以匹配包装后的 HTML */
#ahafair .hljs {
  display: block;
  overflow-x: auto;
  padding: 16px;
  color: #333;
  background: #f8f8f8;
}

#ahafair .hljs-comment,
#ahafair .hljs-quote {
  color: #998;
  font-style: italic;
}

#ahafair .hljs-keyword,
#ahafair .hljs-selector-tag,
#ahafair .hljs-subst {
  color: #333;
  font-weight: bold;
}

#ahafair .hljs-number,
#ahafair .hljs-literal,
#ahafair .hljs-variable,
#ahafair .hljs-template-variable,
#ahafair .hljs-tag .hljs-attr {
  color: #008080;
}

#ahafair .hljs-string,
#ahafair .hljs-doctag {
  color: #d14;
}

#ahafair .hljs-title,
#ahafair .hljs-section,
#ahafair .hljs-selector-id {
  color: #900;
  font-weight: bold;
}

#ahafair .hljs-subst {
  font-weight: normal;
}

#ahafair .hljs-type,
#ahafair .hljs-class .hljs-title {
  color: #458;
  font-weight: bold;
}

#ahafair .hljs-tag,
#ahafair .hljs-name,
#ahafair .hljs-attribute {
  color: #000080;
  font-weight: normal;
}

#ahafair .hljs-regexp,
#ahafair .hljs-link {
  color: #009926;
}

#ahafair .hljs-symbol,
#ahafair .hljs-bullet {
  color: #990073;
}

#ahafair .hljs-built_in,
#ahafair .hljs-builtin-name {
  color: #0086b3;
}

#ahafair .hljs-meta {
  color: #999;
  font-weight: bold;
}

#ahafair .hljs-deletion {
  background: #fdd;
}

#ahafair .hljs-addition {
  background: #dfd;
}

#ahafair .hljs-emphasis {
  font-style: italic;
}

#ahafair .hljs-strong {
  font-weight: bold;
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
