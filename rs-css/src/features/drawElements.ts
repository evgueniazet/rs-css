import { IData } from "../interfaces/IData";

export const drawElements = (data: IData[], level: number) => {
  const table: HTMLElement = document.querySelector(".table")!;
  const tableChildren = table.children;

  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  if (data[level]) {
    data[level].elements.forEach((item) => {
      table.innerHTML += item.text;

      if (item.children && item.children.length > 0) {
        for (let i = 0; i < tableChildren.length; i++) {
          if (
            Number((tableChildren[i] as HTMLElement).dataset.layoutId) ===
            Number(item.id)
          ) {
            item.children.forEach((child) => {
              tableChildren[i].innerHTML = child.text;
            });
          }
        }
      }
    });
  }
};
