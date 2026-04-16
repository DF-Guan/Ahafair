import type { DesignerVariables } from "../types";
import { getCodeThemeCSS } from "./codeTheme";

interface ComponentPresets {
  quotePreset: { base: string; extra: string };
}

export function generateComponents(
  v: DesignerVariables,
  presets: ComponentPresets,
): string {
  const { quotePreset } = presets;
  const underlineStyle = "var(--ahafair-underline-style)";
  const underlineColor = "var(--ahafair-underline-color)";
  const hrColor = "var(--ahafair-hr-color)";
  const hrHeight = "var(--ahafair-hr-height)";

  return `#ahafair blockquote, 
#ahafair .multiquote-1, 
#ahafair .multiquote-2, 
#ahafair .multiquote-3 {
  margin: var(--ahafair-paragraph-margin) 0 !important;
  padding: var(--ahafair-quote-padding-y) var(--ahafair-quote-padding-x);
  ${quotePreset.base}
}
#ahafair blockquote p,
#ahafair .multiquote-1 p,
#ahafair .multiquote-2 p,
#ahafair .multiquote-3 p { 
  color: var(--ahafair-quote-text-color); 
  margin: 0 !important;
  font-size: var(--ahafair-quote-font-size);
  line-height: var(--ahafair-quote-line-height);
  ${v.quoteTextCentered ? "text-align: center !important;" : ""}
}

#ahafair pre {
  margin: var(--ahafair-paragraph-margin) 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

#ahafair pre code {
  display: block;
  background: transparent;
  font-size: var(--ahafair-code-font-size);
  padding: 16px;
  margin: 0;
  overflow-x: auto;
  white-space: pre;
  border-radius: 0;
  word-wrap: normal;
  word-break: keep-all;
  text-align: left;
  letter-spacing: 0;
  word-spacing: 0;
  min-width: max-content;
}

#ahafair pre.custom {
  position: relative;
  margin: var(--ahafair-paragraph-margin) 0;
  background: var(--ahafair-code-background);
  border-radius: 8px;
  overflow: hidden;
}

#ahafair pre.custom > .mac-sign {
  display: ${v.showMacBar ? "block" : "none"};
  line-height: 0;
}

${getCodeThemeCSS(v.codeTheme)}

#ahafair code {
  color: var(--ahafair-inline-code-color);
  background: var(--ahafair-inline-code-background);
  padding: 2px 4px;
  border-radius: ${v.inlineCodeStyle === "rounded" ? "12px" : v.inlineCodeStyle === "github" ? "4px" : "2px"};
  font-size: 0.9em;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  white-space: normal;
  letter-spacing: 0;
  ${v.inlineCodeStyle === "github" ? "border: 1px solid rgba(0,0,0,0.06);" : ""}
  ${v.inlineCodeStyle === "color-text" ? `background: transparent; font-weight: bold; border-bottom: 2px solid var(--ahafair-primary-color-50);` : ""}
}

/* 代码块样式需要更高优先级覆盖行内代码样式 */
#ahafair pre code,
#ahafair pre code.hljs {
  white-space: pre;
  text-align: left;
  letter-spacing: 0;
  word-spacing: 0;
}

#ahafair a {
  color: var(--ahafair-link-color);
  text-decoration: none;
  border-bottom: ${v.linkUnderline ? `1px solid var(--ahafair-link-color)` : "none"};
  word-break: break-all;
}

#ahafair em {
  font-style: italic;
  color: var(--ahafair-italic-color);
}

#ahafair del {
  text-decoration: line-through;
  color: var(--ahafair-del-color);
}

#ahafair u {
  text-decoration-line: underline;
  text-decoration-style: ${underlineStyle};
  text-underline-offset: 0.18em;
  text-decoration-thickness: 1px;
  text-decoration-color: ${underlineColor};
}

#ahafair mark {
  background: var(--ahafair-mark-background);
  color: var(--ahafair-mark-color);
  padding: 0 2px;
  border-radius: 2px;
}

#ahafair hr {
  margin: var(--ahafair-hr-margin) 0;
  border: 0;
  ${(() => {
    const style = v.hrStyle || "solid";
    const color = hrColor;
    const height = hrHeight;

    if (style === "pill") {
      return `
    height: ${height};
    background: ${color};
    width: 20%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
      `;
    }

    return `
    border-top: ${height} ${style} ${color};
    `;
  })()}
}
#ahafair table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--ahafair-paragraph-margin) 0;
}

#ahafair th {
  background: var(--ahafair-table-header-background);
  color: var(--ahafair-table-header-color);
  font-weight: bold;
}

#ahafair th, #ahafair td {
  border: 1px solid var(--ahafair-table-border-color);
  padding: 8px 12px;
  text-align: left;
}

${
  v.tableZebra
    ? `
#ahafair tr:nth-child(even) {
  background: #fcfcfc;
}`
    : ""
}

#ahafair img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: var(--ahafair-image-margin) auto;
  border-radius: var(--ahafair-image-border-radius);
  box-shadow: var(--ahafair-image-shadow);
}`;
}
