import { IData } from "../interfaces/IData";

export const drawTable = (data: IData[]): void => {

    const tableWrapper = document.querySelector('.table-wrapper');
    const table: HTMLElement | null = document.querySelector('.table')!;
    const level = 0;

    if (tableWrapper) {
        tableWrapper.setAttribute('id', data[level].id);
    }

    data[level].elements.forEach((item) => {
        table.innerHTML = table.innerHTML + item.text;
    })

    data[level].layout.forEach((i) => {
        const tableChildren = table.children;
        const tableChildrenArr = Array.from(tableChildren);
        tableChildrenArr.forEach((element) => {
            element.setAttribute('title', i.text);
        })
    })
};