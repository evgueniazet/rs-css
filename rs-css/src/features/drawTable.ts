import { IData } from '../interfaces/IData';
import { drawElements } from './drawElements';

export const drawTable = (data: IData[]): void => {
    const tableWrapper = document.querySelector('.table-wrapper');
    const table: HTMLElement | null = document.querySelector('.table')!;
    const level = 0;
    const levelKey = 'gameLevel';

    if (tableWrapper) {
        tableWrapper.setAttribute('id', data[level].id);
    }

    drawElements(data, level, table);
    localStorage.setItem(levelKey, `${level}`);
};
