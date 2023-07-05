import { IData } from '../interfaces/IData';

export class LayoutDrawer {
  private data: IData[];

  private level: number;

  constructor(data: IData[], level: number) {
    this.data = data;
    this.level = level;
  }

  public drawLayout(): void {
    const htmlField: HTMLElement | null = document.querySelector('.layout-field-html');
    const levelNumber: number = this.level + 1;

    if (htmlField && this.level < this.data.length) {
      htmlField.textContent = '';

      if (this.data[this.level].id === String(levelNumber)) {
        this.data[this.level].layout.forEach((item) => {
          const divElem: HTMLElement = document.createElement('div');
          divElem.classList.add('layout-field-html-item');
          divElem.dataset.layoutId = item.id;
          htmlField.appendChild(divElem);
          divElem.textContent += item.text;
        });
      }
    }
  }
}
