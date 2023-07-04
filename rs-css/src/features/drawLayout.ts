import { IData } from "../interfaces/IData";

export const drawLayout = (data: IData[], level: number): void => {
  const htmlField = document.querySelector(".layout-field-html");
  const levelNumber = level + 1;

  if (htmlField && level < data.length) {
    htmlField.textContent = "";

    if (data[level].id === String(levelNumber)) {
      data[level].layout.forEach((item) => {
        const divElem = document.createElement("div");
        divElem.classList.add("layout-field-html-item");
        divElem.dataset.layoutId = item.id;
        htmlField.appendChild(divElem);
        divElem.textContent += item.text;
      });
    }
  }
};
