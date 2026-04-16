import { describe, expect, it } from "vitest";
import { defaultVariables } from "../../components/Theme/ThemeDesigner/defaults";
import { generateVariables } from "../../components/Theme/ThemeDesigner/generators/variables";

describe("theme designer variables generator", () => {
  it("keeps page padding on #ahafair root for live preview", () => {
    const css = generateVariables(defaultVariables, "PingFang SC, sans-serif");

    expect(css).toContain("--ahafair-page-padding: 8px;");
    expect(css).toContain("padding: 0 var(--ahafair-page-padding);");
    expect(css).not.toContain("#ahafair > *");
  });
});
