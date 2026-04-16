import type { DesignerVariables } from "../types";

export function generateGlobal(v: DesignerVariables): string {
  return `#ahafair figcaption {
  color: var(--ahafair-image-caption-color);
  font-size: var(--ahafair-image-caption-font-size);
  text-align: var(--ahafair-image-caption-align);
  margin-top: 8px;
  line-height: var(--ahafair-line-height);
}

#ahafair strong { 
  font-weight: bold;
  ${
    v.strongColor && v.strongColor !== "inherit"
      ? `color: ${v.strongColor};`
      : v.strongStyle === "none"
        ? "color: inherit;"
        : "color: var(--ahafair-primary-color);"
  }
  ${v.strongStyle === "highlighter" ? "background: var(--ahafair-primary-color-20); padding: 0 2px; border-radius: 2px;" : ""}
  ${v.strongStyle === "highlighter-bottom" ? "background: linear-gradient(to bottom, transparent 60%, var(--ahafair-primary-color-30) 60%); padding: 0 2px;" : ""}
  ${v.strongStyle === "underline" ? "border-bottom: 2px solid var(--ahafair-primary-color); padding-bottom: 1px;" : ""}
  ${v.strongStyle === "dot" ? `-webkit-text-emphasis: dot; -webkit-text-emphasis-position: under; text-emphasis: dot; text-emphasis-position: under;` : ""}
}`;
}
