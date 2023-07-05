import { IData } from '../interfaces/IData';
import { createTooltips } from './createTooltip';
import { createNewMarkedItemsArr } from '../utils/createNewMarkedItemsArr';

export const handleLayoutItems = (data: IData[], level: number): void => {
  const layoutItems: NodeListOf<Element> = document.querySelectorAll(
    '.layout-field-html-item',
  );
  const table: HTMLElement | null = document.querySelector('.table');
  const tableChildren: HTMLCollection | undefined = table?.children;

  createTooltips(tableChildren, data, level);

  const handleLayoutItemsMouseOver = (e: Event): void => {
    const layoutItemEl = e.target as HTMLElement | null;

    layoutItemEl
      && tableChildren
      && Array.from(tableChildren).forEach((item: Element) => {
        if (
          (item as HTMLElement).dataset.layoutId
          === layoutItemEl?.dataset.layoutId
        ) {
          const id: string | undefined = layoutItemEl?.dataset.layoutId;
          let markedItemsArr: number[] = [];

          layoutItems.forEach((el, idx) => {
            if ((el as HTMLElement).dataset.layoutId === id) {
              markedItemsArr.push(idx);
              markedItemsArr = createNewMarkedItemsArr(markedItemsArr);

              markedItemsArr.forEach((elem) => {
                layoutItems[elem].classList.add(
                  'layout-field-html-item-active',
                );
              });
            }
          });

          item.classList.add('table-item--active-tooltip');
          item.classList.add('shadow');
        }

        item.children
          && Array.from(item.children).forEach((item2Level: Element) => {
            if (
              (item2Level as HTMLElement).dataset.layoutId
              === layoutItemEl?.dataset.layoutId
            ) {
              item2Level.classList.add('table-item--active-tooltip');
              item2Level.classList.add('shadow');
            }
          });
      });
  };

  const handleLayoutItemsMouseOut = (e: Event): void => {
    const layoutItemEl = e.target as HTMLElement | null;

    layoutItemEl
      && tableChildren
      && Array.from(tableChildren).forEach((item: Element) => {
        if (
          (item as HTMLElement).dataset.layoutId
          === layoutItemEl?.dataset.layoutId
        ) {
          item.classList.remove('table-item--active-tooltip');
          item.classList.remove('shadow');
        }

        item.children
          && Array.from(item.children).forEach((item2Level: Element) => {
            if (
              (item2Level as HTMLElement).dataset.layoutId
                === layoutItemEl?.dataset.layoutId
              && !item2Level.classList.contains('tooltip')
            ) {
              item2Level.classList.remove('table-item--active-tooltip');
              item2Level.classList.remove('shadow');
            }
          });
      });

    layoutItems.forEach((element) => {
      element.classList.remove('layout-field-html-item-active');
    });
  };

  Array.from(layoutItems).forEach((element) => {
    element.addEventListener('mouseover', handleLayoutItemsMouseOver);
    element.addEventListener('mouseout', handleLayoutItemsMouseOut);
  });
};
