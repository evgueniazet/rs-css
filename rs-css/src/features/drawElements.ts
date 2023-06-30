import { IData } from "../interfaces/IData";

export const drawElements = (data: IData[], level: number, table: HTMLElement) => {
    data[level].elements.forEach((item) => {
        table.innerHTML += item.text;
    });

    data[level].layout.forEach((i) => {
        const tableChildren = table.children;
        const tableChildrenArr = Array.from(tableChildren);
        tableChildrenArr.forEach((element) => {
            element.setAttribute('title', i.text);
        });
    });
}