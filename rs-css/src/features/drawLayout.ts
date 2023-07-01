import { IData } from '../interfaces/IData';

export const drawLayout = (data: IData[], level: string): void => {
    const htmlField = document.querySelector('.layout-field-html');
    const tableWrapper = document.querySelector('.table-wrapper');
    const id = tableWrapper?.getAttribute('id');

    const levelNumber = Number(level) + 1;
    const index = levelNumber - 1;

    if (htmlField) {

        htmlField.textContent = '';

        if (data[index].id === String(levelNumber)) {
            data[index].layout.forEach((item) => {
                const divElem = document.createElement('div');
                divElem.classList.add('layout-field-html-item');
                divElem.setAttribute('id', `${item.id}`);
                htmlField.appendChild(divElem);
                divElem.textContent += item.text;
            });
        }
    }
};
