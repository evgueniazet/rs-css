import { IData } from "../interfaces/IData";

export class ElementDrawer<T extends HTMLElement> {
  private data: IData[];

  private level: number;

  private table: T;

  constructor(data: IData[], level: number) {
    this.data = data;
    this.level = level;
    this.table = document.querySelector(".table")!;
  }

  public drawElements(): void {
    const tableChildren: HTMLCollection = this.table.children;

    while (this.table.firstChild) {
      this.table.removeChild(this.table.firstChild);
    }

    if (this.data[this.level] && this.level < this.data.length) {
      this.data[this.level].elements.forEach((item, idx) => {
        this.table.innerHTML += item.text;

        if (item.children && item.children.length) {
          item.children.forEach((child) => {
            tableChildren[idx].innerHTML = child.text;
          });
        }
      });
    }
  }
}
