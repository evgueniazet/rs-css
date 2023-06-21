import { IData } from "../interfaces/IData";

export const drawTable = (data: IData[]): void => {

    const tableWrapper = document.querySelector('.table-wrapper');
    const table: HTMLElement | null = document.querySelector('.table')!;

    data.forEach((elem) => {

        if (tableWrapper) {
            tableWrapper.setAttribute('id', elem.id);
        }

        elem.elements.forEach((item) => {
            table.innerHTML = table.innerHTML + item.text;
        })
    })
};