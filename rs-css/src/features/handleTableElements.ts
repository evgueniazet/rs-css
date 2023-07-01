import { IData } from '../interfaces/IData';

export const handleTableElements = (data: IData[]): void => {
    const table: HTMLElement | null = document.querySelector('.table');
    let isMarked = false;
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');

    document.addEventListener('DOMContentLoaded', () => {
        const htmlFieldItemArr = document.querySelectorAll('.layout-field-html-item');

        if (table && htmlFieldItemArr) {

            const childrenTable = table.children;
            const childrenTableArr = Array.from(childrenTable);

            const handleChildMouseOver = (e: Event) => {

                const targetElement = e.target as HTMLElement | null;
                const id = targetElement?.getAttribute('id');


                htmlFieldItemArr.forEach((item) => {
                    if (Number(id) === Number(item.id)) {

                        htmlFieldItemArr
                        if (!isMarked) {
                            (item as HTMLElement).classList.add('layout-field-html-item-active');
                            isMarked = true;

                            if (targetElement && tooltip) {
                                targetElement.classList.add('shadow');
                                targetElement.appendChild(tooltip);
                                tooltip.innerHTML = item.innerHTML
                            }

                        } else {
                            (item as HTMLElement).classList.remove('layout-field-html-item-active');
                            isMarked = false;

                            if (targetElement && tooltip) {
                                targetElement.classList.remove('shadow');
                                targetElement.removeChild(tooltip);
                            }
                        }
                    }
                });
            };

            childrenTableArr.forEach((child) => {
                child.addEventListener('mouseover', handleChildMouseOver);
                child.addEventListener('mouseout', handleChildMouseOver);
            });
        }
    });
};
