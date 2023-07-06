import { IData } from '../interfaces/IData';
import { createTooltip } from './createTooltip';

export const createTooltips = (
  tableChildren: HTMLCollection | undefined,
  data: IData[],
  level: number,
): void => {
  tableChildren
    && Array.from(tableChildren).forEach((item: Element) => {
      const tooltipText: string = data[level].layout.find(
        (element) => element.id === (item as HTMLElement).dataset.layoutId,
      )?.text ?? '';
      const tooltip: HTMLElement = createTooltip(tooltipText);
      item.appendChild(tooltip);

      item.children
        && Array.from(item.children).forEach((item2Level: Element) => {
          if (!item2Level.classList.contains('tooltip')) {
            const tooltipChildrenText: string = data[level].layout.find(
              (element) => element.id === (item2Level as HTMLElement).dataset.layoutId,
            )?.text ?? '';
            const tooltipChildren: HTMLElement = createTooltip(tooltipChildrenText);
            item2Level.appendChild(tooltipChildren);
          }
        });
    });
};
