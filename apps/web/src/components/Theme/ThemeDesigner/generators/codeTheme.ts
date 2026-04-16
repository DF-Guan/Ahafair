/**
 * 获取代码主题 CSS
 */
export function getCodeThemeCSS(themeId: string): string {
  const themes: Record<string, string> = {
    github: `
            #ahafair .hljs-comment, #ahafair .hljs-quote { color: #998; font-style: italic; }
            #ahafair .hljs-keyword, #ahafair .hljs-selector-tag, #ahafair .hljs-subst { color: #333; font-weight: bold; }
            #ahafair .hljs-string, #ahafair .hljs-doctag { color: #d14; }
            #ahafair .hljs-title, #ahafair .hljs-section, #ahafair .hljs-selector-id { color: #900; font-weight: bold; }
            #ahafair .hljs-type, #ahafair .hljs-class .hljs-title { color: #458; font-weight: bold; }
            #ahafair .hljs-variable, #ahafair .hljs-template-variable { color: #008080; }
            #ahafair .hljs-attr { color: #000080; }
        `,
    monokai: `
            #ahafair .hljs { color: #f8f8f2; }
            #ahafair .hljs-comment, #ahafair .hljs-quote { color: #75715e; }
            #ahafair .hljs-keyword, #ahafair .hljs-selector-tag, #ahafair .hljs-literal { color: #f92672; }
            #ahafair .hljs-string, #ahafair .hljs-attr { color: #e6db74; }
            #ahafair .hljs-title, #ahafair .hljs-section { color: #a6e22e; }
            #ahafair .hljs-type, #ahafair .hljs-class .hljs-title { color: #66d9ef; font-style: italic; }
            #ahafair .hljs-built_in, #ahafair .hljs-selector-attr { color: #ae81ff; }
        `,
    vscode: `
            #ahafair .hljs { color: #d4d4d4; }
            #ahafair .hljs-comment { color: #6a9955; }
            #ahafair .hljs-keyword { color: #569cd6; }
            #ahafair .hljs-string { color: #ce9178; }
            #ahafair .hljs-literal { color: #569cd6; }
            #ahafair .hljs-number { color: #b5cea8; }
            #ahafair .hljs-function { color: #dcdcaa; }
            #ahafair .hljs-class { color: #4ec9b0; }
            #ahafair .hljs-attr { color: #9cdcfe; }
        `,
    "night-owl": `
            #ahafair .hljs { color: #d6deeb; }
            #ahafair .hljs-comment { color: #637777; font-style: italic; }
            #ahafair .hljs-keyword { color: #c792ea; }
            #ahafair .hljs-selector-tag { color: #ff5874; }
            #ahafair .hljs-string { color: #ecc48d; }
            #ahafair .hljs-variable { color: #addb67; }
            #ahafair .hljs-number { color: #f78c6c; }
            #ahafair .hljs-function { color: #82aaff; }
            #ahafair .hljs-attr { color: #7fdbca; }
        `,
    dracula: `
            #ahafair .hljs { color: #f8f8f2; }
            #ahafair .hljs-comment { color: #6272a4; }
            #ahafair .hljs-keyword { color: #ff79c6; }
            #ahafair .hljs-selector-tag { color: #ff79c6; }
            #ahafair .hljs-literal { color: #bd93f9; }
            #ahafair .hljs-string { color: #f1fa8c; }
            #ahafair .hljs-variable { color: #50fa7b; }
            #ahafair .hljs-number { color: #bd93f9; }
            #ahafair .hljs-function { color: #50fa7b; }
            #ahafair .hljs-class { color: #8be9fd; }
            #ahafair .hljs-attr { color: #50fa7b; }
        `,
    "solarized-dark": `
            #ahafair .hljs { color: #839496; }
            #ahafair .hljs-comment { color: #586e75; font-style: italic; }
            #ahafair .hljs-keyword { color: #859900; }
            #ahafair .hljs-selector-tag { color: #859900; }
            #ahafair .hljs-string { color: #2aa198; }
            #ahafair .hljs-variable { color: #b58900; }
            #ahafair .hljs-number { color: #d33682; }
            #ahafair .hljs-function { color: #268bd2; }
            #ahafair .hljs-attr { color: #b58900; }
        `,
    "solarized-light": `
            #ahafair .hljs { color: #657b83; }
            #ahafair .hljs-comment { color: #93a1a1; font-style: italic; }
            #ahafair .hljs-keyword { color: #859900; }
            #ahafair .hljs-selector-tag { color: #859900; }
            #ahafair .hljs-string { color: #2aa198; }
            #ahafair .hljs-variable { color: #b58900; }
            #ahafair .hljs-number { color: #d33682; }
            #ahafair .hljs-function { color: #268bd2; }
            #ahafair .hljs-attr { color: #b58900; }
        `,
    xcode: `
            #ahafair .hljs { color: #000000; }
            #ahafair .hljs-comment { color: #007400; }
            #ahafair .hljs-quote { color: #007400; }
            #ahafair .hljs-keyword { color: #aa0d91; }
            #ahafair .hljs-selector-tag { color: #aa0d91; }
            #ahafair .hljs-literal { color: #aa0d91; }
            #ahafair .hljs-string { color: #c41a16; }
            #ahafair .hljs-attr { color: #836C28; }
            #ahafair .hljs-title { color: #1c00cf; }
            #ahafair .hljs-section { color: #1c00cf; }
            #ahafair .hljs-type { color: #5c2699; }
            #ahafair .hljs-class .hljs-title { color: #5c2699; }
            #ahafair .hljs-variable { color: #3f6e74; }
            #ahafair .hljs-built_in { color: #5c2699; }
            #ahafair .hljs-number { color: #1c00cf; }
        `,
    "atom-one-light": `
            #ahafair .hljs { color: #383a42; }
            #ahafair .hljs-comment { color: #a0a1a7; font-style: italic; }
            #ahafair .hljs-keyword { color: #a626a4; }
            #ahafair .hljs-selector-tag { color: #e45649; }
            #ahafair .hljs-string { color: #50a14f; }
            #ahafair .hljs-variable { color: #986801; }
            #ahafair .hljs-number { color: #986801; }
            #ahafair .hljs-function { color: #4078f2; }
            #ahafair .hljs-attr { color: #986801; }
            #ahafair .hljs-class .hljs-title { color: #c18401; }
            #ahafair .hljs-type { color: #986801; }
            #ahafair .hljs-built_in { color: #c18401; }
        `,
  };
  return themes[themeId] || "";
}
