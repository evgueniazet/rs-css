import { IData } from "../interfaces/IData";

export const drawElements = (data: IData[], level: number) => {
  const table: HTMLElement = document.querySelector(".table")!;
  const tableChildren = table.children;

  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  if (data[level] && level < data.length) {
    data[level].elements.forEach((item, idx) => {
      table.innerHTML += item.text;

      if (item.children && item.children.length) {
        item.children.forEach((child) => {
          tableChildren[idx].innerHTML = child.text;
        });
      }
    });
  }
};
