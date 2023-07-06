import { addClosingTag } from "../utils/addClosingTag";

export const createTooltip = (text: string): HTMLElement => {
  const newText: string = addClosingTag(text);
  const tooltip: HTMLElement | null = document.createElement("div");

  tooltip.classList.add("tooltip");
  tooltip.innerText = newText;

  return tooltip;
};
