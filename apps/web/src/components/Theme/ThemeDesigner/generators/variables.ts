import type { DesignerVariables } from "../types";

const toAlphaColor = (color: string, alpha: number): string => {
  const trimmed = color.trim();
  if (!trimmed) return color;

  if (trimmed.startsWith("#")) {
    const hex = trimmed.slice(1);
    const normalize = (value: string) =>
      value.length === 1 ? value + value : value;
    if (hex.length === 3 || hex.length === 4) {
      const r = parseInt(normalize(hex[0]), 16);
      const g = parseInt(normalize(hex[1]), 16);
      const b = parseInt(normalize(hex[2]), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    if (hex.length === 6 || hex.length === 8) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  }

  const rgbMatch =
    trimmed.match(/^rgb\s*\(\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^,]+)\s*\)$/i) ||
    trimmed.match(
      /^rgba\s*\(\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^,]+)\s*,\s*[^)]+\)$/i,
    );
  if (rgbMatch) {
    const [, r, g, b] = rgbMatch;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const hslMatch =
    trimmed.match(/^hsl\s*\(\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^,]+)\s*\)$/i) ||
    trimmed.match(
      /^hsla\s*\(\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^,]+)\s*,\s*[^)]+\)$/i,
    );
  if (hslMatch) {
    const [, h, s, l] = hslMatch;
    return `hsla(${h}, ${s}, ${l}, ${alpha})`;
  }

  return color;
};

export function generateVariables(
  v: DesignerVariables,
  safeFontFamily: string,
): string {
  const primaryColor20 = toAlphaColor(v.primaryColor, 0.12);
  const primaryColor30 = toAlphaColor(v.primaryColor, 0.18);
  const primaryColor50 = toAlphaColor(v.primaryColor, 0.5);
  const underlineStyle = v.underlineStyle || "solid";
  const underlineColor = v.underlineColor || "currentColor";
  return `#ahafair {
  /* CSS 变量 - 可在 CSS 编辑模式下覆盖 */
  /* 全局 */
  --ahafair-page-padding: ${v.pagePadding ?? 8}px;
  --ahafair-font-size: ${v.fontSize};
  --ahafair-line-height: ${v.lineHeight};
  --ahafair-paragraph-margin: ${v.paragraphMargin}px;
  --ahafair-paragraph-padding: ${v.paragraphPadding ?? 0}px;
  --ahafair-text-color: ${v.paragraphColor};
  --ahafair-primary-color: ${v.primaryColor};
  --ahafair-primary-color-20: ${primaryColor20};
  --ahafair-primary-color-30: ${primaryColor30};
  --ahafair-primary-color-50: ${primaryColor50};
  --ahafair-letter-spacing: ${v.baseLetterSpacing || 0}px;
  --ahafair-underline-style: ${underlineStyle};
  --ahafair-underline-color: ${underlineColor};
  
  /* 标题 */
  --ahafair-h1-font-size: ${v.h1.fontSize}px;
  --ahafair-h1-color: ${v.h1.color};
  --ahafair-h1-margin-top: ${v.h1.marginTop}px;
  --ahafair-h1-margin-bottom: ${v.h1.marginBottom}px;
  --ahafair-h2-font-size: ${v.h2.fontSize}px;
  --ahafair-h2-color: ${v.h2.color};
  --ahafair-h2-margin-top: ${v.h2.marginTop}px;
  --ahafair-h2-margin-bottom: ${v.h2.marginBottom}px;
  --ahafair-h3-font-size: ${v.h3.fontSize}px;
  --ahafair-h3-color: ${v.h3.color};
  --ahafair-h3-margin-top: ${v.h3.marginTop}px;
  --ahafair-h3-margin-bottom: ${v.h3.marginBottom}px;
  --ahafair-h4-font-size: ${v.h4.fontSize}px;
  --ahafair-h4-color: ${v.h4.color};
  --ahafair-h4-margin-top: ${v.h4.marginTop}px;
  --ahafair-h4-margin-bottom: ${v.h4.marginBottom}px;
  
  /* 代码 */
  --ahafair-code-background: ${v.codeBackground};
  --ahafair-code-font-size: ${v.codeFontSize}px;
  --ahafair-inline-code-color: ${v.inlineCodeColor};
  --ahafair-inline-code-background: ${v.inlineCodeBackground};
  
  /* 引用 */
  --ahafair-quote-background: ${v.quoteBackground};
  --ahafair-quote-border-color: ${v.quoteBorderColor};
  --ahafair-quote-border-width: ${v.quoteBorderWidth}px;
  --ahafair-quote-border-style: ${v.quoteBorderStyle};
  --ahafair-quote-text-color: ${v.quoteTextColor};
  --ahafair-quote-font-size: ${v.quoteFontSize}px;
  --ahafair-quote-line-height: ${v.quoteLineHeight};
  --ahafair-quote-padding-x: ${v.quotePaddingX}px;
  --ahafair-quote-padding-y: ${v.quotePaddingY}px;
  
  /* 图片 */
  --ahafair-image-margin: ${v.imageMargin}px;
  --ahafair-image-border-radius: ${v.imageBorderRadius}px;
  --ahafair-image-shadow: ${v.imageShadow ? "0 4px 12px rgba(0, 0, 0, 0.12)" : "none"};
  --ahafair-image-caption-color: ${v.imageCaptionColor};
  --ahafair-image-caption-font-size: ${v.imageCaptionFontSize}px;
  --ahafair-image-caption-align: ${v.imageCaptionTextAlign};
  
  /* 链接与文本 */
  --ahafair-link-color: ${v.linkColor || v.primaryColor};
  --ahafair-italic-color: ${v.italicColor};
  --ahafair-del-color: ${v.delColor};
  --ahafair-mark-background: ${v.markBackground};
  --ahafair-mark-color: ${v.markColor};
  
  /* 表格 */
  --ahafair-table-header-background: ${v.tableHeaderBackground};
  --ahafair-table-header-color: ${v.tableHeaderColor};
  --ahafair-table-border-color: ${v.tableBorderColor};
  
  /* 分割线 */
  --ahafair-hr-color: ${v.hrColor};
  --ahafair-hr-height: ${v.hrHeight}px;
  --ahafair-hr-margin: ${v.hrMargin}px;
  
  /* 列表 */
  --ahafair-list-spacing: ${v.listSpacing}px;
  --ahafair-list-marker-color: ${v.listMarkerColor};
  --ahafair-list-marker-color-l2: ${v.listMarkerColorL2};

  font-family: ${safeFontFamily};
  padding: 0 var(--ahafair-page-padding);
  color: var(--ahafair-text-color);
  overflow-wrap: break-word;
}`;
}
