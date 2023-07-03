import { createNewMarkedItemsArr } from "../utils/createNewMarkedItemsArr";

export const handleTableElements = (): void => {
  const table: HTMLElement | null = document.querySelector(".table");
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");

  const htmlFieldItemArr = document.querySelectorAll(".layout-field-html-item");

  if (table && htmlFieldItemArr) {
    const childrenTable = table.children;

    Array.from(childrenTable).forEach((element) => {
      const handleLayoutItemsMouseOver = (e: Event) => {
        let markedItemsArr: number[] = [];
        const tableElement = e.target as HTMLElement | null;
        tableElement &&
          htmlFieldItemArr.forEach((item, index) => {
            if (
              (item as HTMLElement).dataset.layoutId ===
              tableElement?.dataset.layoutId
            ) {
              markedItemsArr.push(index);
              markedItemsArr = createNewMarkedItemsArr(markedItemsArr);

              tableElement.classList.add("table-item--active-tooltip");
              tableElement.classList.add("shadow");
              markedItemsArr.forEach((elem) => {
                htmlFieldItemArr[elem].classList.add(
                  "layout-field-html-item-active"
                );
              });
            }
          });
      };

      const handleLayoutItemsMouseOut = (e: Event) => {
        const tableElement = e.target as HTMLElement | null;

        tableElement &&
          htmlFieldItemArr.forEach((item) => {
            tableElement.classList.remove("table-item--active-tooltip");
            tableElement.classList.remove("shadow");
            item.classList.remove("layout-field-html-item-active");
          });
      };

      element.addEventListener("mouseover", handleLayoutItemsMouseOver);
      element.addEventListener("mouseout", handleLayoutItemsMouseOut);
    });
  }
};
