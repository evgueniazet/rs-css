import { IData } from '../interfaces/IData';

export const changeLevel = (data: IData[], level: number): void => {
  const levelsTitle: HTMLElement | null = document.querySelector('.levels-title');

  if (levelsTitle) {
    levelsTitle.innerHTML = `Level ${level + 1} from ${data.length}`;
  }
};
