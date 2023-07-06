import { addClosingTag } from "../src/utils/addClosingTag";

describe("addClosingTag", () => {
  test("should add closing tag to a self-closing tag", () => {
    const input = '<img src="image.jpg" />';
    const expectedOutput = '<img src="image.jpg"></img>';
    expect(addClosingTag(input)).toBe(expectedOutput);
  });

  test("should add closing tag to a tag with attributes", () => {
    const input = '<a href="https://example.com" target="_blank">';
    const expectedOutput = '<a href="https://example.com" target="_blank"></a>';
    expect(addClosingTag(input)).toBe(expectedOutput);
  });

  test("should handle tags with no attributes", () => {
    const input = "<span>";
    const expectedOutput = "<span></span>";
    expect(addClosingTag(input)).toBe(expectedOutput);
  });
});
