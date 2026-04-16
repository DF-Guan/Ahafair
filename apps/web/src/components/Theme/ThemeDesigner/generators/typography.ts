import type { DesignerVariables } from "../types";

interface HeadingPreset {
  content: string;
  extra: string;
}

interface TypographyPresets {
  h1Preset: HeadingPreset;
  h2Preset: HeadingPreset;
  h3Preset: HeadingPreset;
  h4Preset: HeadingPreset;
}

export function generateTypography(
  v: DesignerVariables,
  safeFontFamily: string,
  presets: TypographyPresets,
): string {
  const { h1Preset, h2Preset, h3Preset, h4Preset } = presets;

  return `#ahafair p {
  font-family: ${safeFontFamily};
  font-size: var(--ahafair-font-size);
  line-height: var(--ahafair-line-height);
  margin: var(--ahafair-paragraph-margin) 0;
  padding: var(--ahafair-paragraph-padding) 0;
  letter-spacing: var(--ahafair-letter-spacing);
  ${v.textIndent ? "text-indent: 2em;" : ""}
  ${v.textJustify ? "text-align: justify;" : ""}
}

#ahafair li {
  font-family: ${safeFontFamily};
  margin: var(--ahafair-list-spacing) 0;
  line-height: var(--ahafair-line-height);
  letter-spacing: var(--ahafair-letter-spacing);
}

#ahafair h1 .content {
  font-size: var(--ahafair-h1-font-size);
  color: var(--ahafair-h1-color);
  font-weight: ${v.h1.fontWeight || "bold"};
  letter-spacing: ${v.h1.letterSpacing || 0}px;
  ${h1Preset.content}
}
#ahafair h1 { margin: var(--ahafair-h1-margin-top) 0 var(--ahafair-h1-margin-bottom); ${v.h1.centered ? "text-align: center;" : ""} }

#ahafair h2 .content {
  font-size: var(--ahafair-h2-font-size);
  color: var(--ahafair-h2-color);
  font-weight: ${v.h2.fontWeight || "bold"};
  letter-spacing: ${v.h2.letterSpacing || 0}px;
  ${h2Preset.content}
}
#ahafair h2 { margin: var(--ahafair-h2-margin-top) 0 var(--ahafair-h2-margin-bottom); ${v.h2.centered ? "text-align: center;" : ""} }

#ahafair h3 .content {
  font-size: var(--ahafair-h3-font-size);
  color: var(--ahafair-h3-color);
  font-weight: ${v.h3.fontWeight || "bold"};
  letter-spacing: ${v.h3.letterSpacing || 0}px;
  ${h3Preset.content}
}
#ahafair h3 { margin: var(--ahafair-h3-margin-top) 0 var(--ahafair-h3-margin-bottom); ${v.h3.centered ? "text-align: center;" : ""} }

#ahafair h4 .content {
  font-size: var(--ahafair-h4-font-size);
  color: var(--ahafair-h4-color);
  font-weight: ${v.h4.fontWeight || "bold"};
  letter-spacing: ${v.h4.letterSpacing || 0}px;
  ${h4Preset.content}
}
#ahafair h4 { margin: var(--ahafair-h4-margin-top) 0 var(--ahafair-h4-margin-bottom); ${v.h4.centered ? "text-align: center;" : ""} }

#ahafair ul { list-style-type: ${v.ulStyle}; padding-left: 20px; margin: var(--ahafair-paragraph-margin) 0; font-size: ${!v.ulFontSize || v.ulFontSize === "inherit" ? "var(--ahafair-font-size)" : v.ulFontSize}; }
#ahafair ul ul { list-style-type: ${v.ulStyleL2}; margin: 4px 0; }
#ahafair ol { list-style-type: ${v.olStyle}; padding-left: 20px; margin: var(--ahafair-paragraph-margin) 0; font-size: ${!v.olFontSize || v.olFontSize === "inherit" ? "var(--ahafair-font-size)" : v.olFontSize}; }
#ahafair ol ol { list-style-type: ${v.olStyleL2}; margin: 4px 0; }
/* 列表符号颜色 */
#ahafair ul li::marker,
  #ahafair ol li::marker {
  color: var(--ahafair-list-marker-color);
}
#ahafair ul ul li::marker,
  #ahafair ol ol li::marker,
    #ahafair ul ol li::marker,
      #ahafair ol ul li::marker {
  color: var(--ahafair-list-marker-color-l2);
}`;
}
