import { IData } from "../interfaces/IData";

export const drawLayout = (data: IData[]): void => {
    const htmlField = document.querySelector('.layout-field-html');
    const tableWrapper = document.querySelector('.table-wrapper');
    const id = tableWrapper?.getAttribute('id');

    if (htmlField) {

        htmlField.textContent = '';

        data.forEach((elem) => {
            if (elem.id === id) {
                elem.layout.forEach((item) => {
                    const divElem = document.createElement('div');
                    divElem.classList.add('layout-field-html-item');
                    divElem.setAttribute('id', `${item.id}`)
                    htmlField.appendChild(divElem);
                    divElem.textContent += item.text;
                });
            }
        });
    }
};
