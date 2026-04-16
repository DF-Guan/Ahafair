interface HeadingPresetCss {
  content: string;
  extra?: string;
}

interface QuotePresetCss {
  base: string;
  extra?: string;
}

const headingPresetTemplates: Record<
  string,
  (tag: string) => HeadingPresetCss
> = {
  simple: () => ({ content: "" }),
  "left-border": () => ({
    content: `
            border-left: 4px solid var(--ahafair-primary-color);
            padding-left: 10px;
        `,
  }),
  "bottom-border": () => ({
    content: `
            border-bottom: 2px solid var(--ahafair-primary-color);
            padding-bottom: 8px;
        `,
  }),
  "double-line": () => ({
    content: `
            border-top: 2px solid var(--ahafair-primary-color);
            border-bottom: 2px solid var(--ahafair-primary-color);
            padding: 8px 0;
        `,
  }),
  boxed: () => ({
    content: `
            background: var(--ahafair-primary-color-20);
            border-left: 4px solid var(--ahafair-primary-color);
            padding: 8px 12px;
            border-radius: 4px;
        `,
  }),
  "bottom-highlight": () => ({
    content: `
            display: inline-block;
            background: linear-gradient(to bottom, transparent 60%, var(--ahafair-primary-color-30) 60%);
            padding: 0 4px;
        `,
  }),
  pill: () => ({
    content: `
            background: var(--ahafair-primary-color);
            color: #fff;
            padding: 4px 16px;
            border-radius: 20px;
            display: inline-block;
        `,
  }),
  bracket: (tag) => ({
    content: `
            display: inline-block;
            position: relative;
            padding: 0 10px;
        `,
    extra: `
        #ahafair ${tag} .content::before {
            content: '[';
            margin-right: 5px;
            color: var(--ahafair-primary-color);
            font-weight: bold;
        }
        #ahafair ${tag} .content::after {
            content: ']';
            margin-left: 5px;
            color: var(--ahafair-primary-color);
            font-weight: bold;
        }
        `,
  }),
};

const quotePresetTemplates: Record<string, () => QuotePresetCss> = {
  "left-border": () => ({
    base: `
            background: var(--ahafair-quote-background);
            border-left-style: var(--ahafair-quote-border-style);
            border-left-width: var(--ahafair-quote-border-width);
            border-left-color: var(--ahafair-quote-border-color);
        `,
  }),
  "top-bottom-border": () => ({
    base: `
            border-top: var(--ahafair-quote-border-width) var(--ahafair-quote-border-style) var(--ahafair-quote-border-color);
            border-bottom: var(--ahafair-quote-border-width) var(--ahafair-quote-border-style) var(--ahafair-quote-border-color);
            border-left: none;
            background: var(--ahafair-quote-background);
            text-align: center;
        `,
    extra: `
        #ahafair blockquote p { text-align: center; }
        `,
  }),
  "quotation-marks": () => ({
    base: `
            background: var(--ahafair-quote-background);
            border-left: none;
            border-radius: 4px;
            padding-left: calc(var(--ahafair-quote-padding-x) + 40px);
        `,
    extra: `
        #ahafair blockquote::before {
            content: "“";
            display: block;
            height: 0;
            font-size: 60px;
            color: var(--ahafair-quote-border-color);
            font-family: Georgia, serif;
            line-height: 1;
            margin-left: -40px;
            margin-top: -6px;
            opacity: 0.3;
            pointer-events: none;
        }
        #ahafair blockquote p {
            position: relative;
            z-index: 1;
        }
        `,
  }),
  boxed: () => ({
    base: `
            border: var(--ahafair-quote-border-width) var(--ahafair-quote-border-style) var(--ahafair-quote-border-color);
            background: var(--ahafair-quote-background);
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        `,
  }),
  "center-accent": () => ({
    base: `
            background: transparent;
            border-left: none;
            text-align: center;
            position: relative;
        `,
    extra: `
        #ahafair blockquote p { text-align: center; }
        #ahafair blockquote::before {
            content: "";
            display: block;
            width: 40px;
            height: var(--ahafair-quote-border-width);
            background: var(--ahafair-quote-border-color);
            margin: 0 auto 15px;
            opacity: 0.8;
        }
        #ahafair blockquote::after {
            content: "";
            display: block;
            width: 40px;
            height: var(--ahafair-quote-border-width);
            background: var(--ahafair-quote-border-color);
            margin: 15px auto 0;
            opacity: 0.8;
        }
        `,
  }),
  "corner-frame": () => ({
    base: `
            background: var(--ahafair-quote-background);
            border-left: none;
            position: relative;
        `,
    extra: `
        #ahafair blockquote::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            border-top: var(--ahafair-quote-border-width) var(--ahafair-quote-border-style) var(--ahafair-quote-border-color);
            border-left: var(--ahafair-quote-border-width) var(--ahafair-quote-border-style) var(--ahafair-quote-border-color);
        }
        #ahafair blockquote::after {
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            width: 20px;
            height: 20px;
            border-bottom: var(--ahafair-quote-border-width) var(--ahafair-quote-border-style) var(--ahafair-quote-border-color);
            border-right: var(--ahafair-quote-border-width) var(--ahafair-quote-border-style) var(--ahafair-quote-border-color);
        }
        `,
  }),
};

/**
 * 获取标题预设 CSS 模板
 */
export function getHeadingPresetCSS(
  presetId: string,
  _color: string,
  tag: string,
): { content: string; extra: string } {
  const template =
    headingPresetTemplates[presetId] || headingPresetTemplates.simple;
  const css = template(tag);
  return { content: css.content || "", extra: css.extra || "" };
}

/**
 * 获取引用预设 CSS
 */
export function getQuotePresetCSS(
  presetId: string,
  _color: string,
  _bgColor: string,
  _textColor: string,
  _borderWidth: number,
  _borderStyle: string,
  _padding: number,
  _centered?: boolean,
): { base: string; extra: string } {
  const template =
    quotePresetTemplates[presetId] || quotePresetTemplates["left-border"];
  const css = template();
  return { base: css.base || "", extra: css.extra || "" };
}
