import { IData } from "../interfaces/IData";

export const handleLayoutItems = (data: IData[]) => {
    document.addEventListener('DOMContentLoaded', () => {
        const layoutItems = document.querySelectorAll('.layout-field-html-item');
        const table: HTMLElement | null = document.querySelector('.table');
        const tableChildren = table?.children;
        let isMarked = false;
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');

        layoutItems.forEach((element) => {
            const handleLayoutItemsMouseover = (e: Event) => {
                const target = e.target as HTMLElement | null;
                if (target && tableChildren) {
                    Array.from(tableChildren).forEach((item: Element) => {
                        if (item.id === target.id) {

                            data.forEach((elem) => {
                                elem.layout.forEach((e) => {
                                    if (Number(e.id) === Number(target.id)) {
                                        tooltip.innerHTML = target.innerHTML;
                                    }
                                })
                            })

                            if (!isMarked) {
                                item.appendChild(tooltip);

                                item.classList.add('shadow');
                                isMarked = true;
                            } else {
                                item.classList.remove('shadow');
                                item.removeChild(tooltip);
                                isMarked = false;
                            }
                        }
                    });
                }
            }

            element.addEventListener('mouseover', handleLayoutItemsMouseover);
            element.addEventListener('mouseout', handleLayoutItemsMouseover);
        });
    });
}
