import { IData } from "../interfaces/IData";

export const createTooltips = (
  tableChildren: HTMLCollection | undefined,
  data: IData[],
  level: number
) => {
  tableChildren &&
    Array.from(tableChildren).forEach((item: Element, index) => {
      const tooltipText =
        data[level].layout.find(
          (element) => element.id === (item as HTMLElement).dataset.layoutId
        )?.text ?? "";
      const tooltip = createTooltip(tooltipText);
      item.appendChild(tooltip);

      item.children &&
        Array.from(item.children).forEach((item2Level: Element) => {
          if (!item2Level.classList.contains("tooltip")) {
            const tooltipText =
              data[level].layout.find(
                (element) =>
                  element.id === (item2Level as HTMLElement).dataset.layoutId
              )?.text ?? "";
            const tooltip = createTooltip(tooltipText);
            item2Level.appendChild(tooltip);
          }
        });
    });
};

const createTooltip = (text: string) => {
  const newText = addClosingTag(text);
  const tooltip = document.createElement("div");

  tooltip.classList.add("tooltip");
  tooltip.innerText = newText;

  return tooltip;
};

const addClosingTag = (tag: string) => {
  const tagRegex = /<(\w+)(.*?)\/?>/;
  const regexResult = tag.match(tagRegex);
  if (regexResult) {
    const tagName = regexResult[1];
    const attributes = regexResult[2].replace(/^\s+|\s+$/g, "");
    const space = attributes.length > 0 ? " " : "";
    return "<" + tagName + space + attributes + "></" + tagName + ">";
  }

  return tag;
};
