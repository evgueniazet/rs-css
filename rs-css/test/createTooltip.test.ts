import { createTooltip } from "../src/features/createTooltip";

describe("createTooltip", () => {
  test("should create a tooltip element with correct text", () => {
    const text = "Sample text";
    const tooltip = createTooltip(text);

    expect(tooltip).toBeDefined();
    expect(tooltip.tagName).toBe("DIV");
    expect(tooltip.classList.contains("tooltip")).toBe(true);
    expect(tooltip.innerText).toBe(text);
  });

  test("should add closing tag to the text", () => {
    const text = "Sample text";
    const tooltip = createTooltip(text);

    expect(tooltip).toBeDefined();
    expect(tooltip.outerHTML).toMatch(/<\/.*?>/);
  });
});
