import { IData } from "../interfaces/IData";

export const handleTableElements = (data: IData[]): void => {

    const table: HTMLElement | null = document.querySelector('.table');
    const htmlField: HTMLElement | null = document.querySelector('.layout-field-html');
    let isMarked = false;

    if (table && htmlField) {
        const childrenTable = table.children;
        const childrenTableArr = Array.from(childrenTable);
        const htmlFieldChildrenArr = Array.from(htmlField.children);

        const handleChildMouseOver = (e: Event) => {
            const targetElement = e.target as HTMLElement | null;
            const id = targetElement?.getAttribute('id');

            htmlFieldChildrenArr.forEach((item) => {
                if (Number(id) === Number(item.id)) {
                    // Replace by adding a class 
                    if (!isMarked) {
                        (item as HTMLElement).style.color = 'white';
                        isMarked = true;
                    } else {
                        (item as HTMLElement).style.color = 'black';
                        isMarked = false;
                    }
                }
            })
        };

        childrenTableArr.forEach((child) => {
            child.addEventListener('mouseover', handleChildMouseOver);
            child.addEventListener('mouseout', handleChildMouseOver);
        })
    }
}