import { IData } from '../interfaces/IData';

export const addHelpDescription = (data: IData[], level: number): void => {
  const levelsWrapper: HTMLElement | null = document.querySelector('.levels-wrapper');

  while (
    levelsWrapper?.firstChild
    && levelsWrapper.firstChild instanceof Element
  ) {
    levelsWrapper.removeChild(levelsWrapper.firstChild);
  }

  if (level < data.length) {
    const levelHelp: HTMLElement | null = document.createElement('div');
    levelHelp.classList.add('levels-help');
    levelsWrapper?.appendChild(levelHelp);

    const levelHelpTitle: HTMLElement | null = document.createElement('h3');
    levelHelpTitle.classList.add('levels-help-title');
    levelHelp.appendChild(levelHelpTitle);
    levelHelpTitle.innerHTML = data[level].help.title;

    const levelHelpDescription: HTMLElement | null = document.createElement('p');
    levelHelpDescription.classList.add('levels-help-description');
    levelHelp.appendChild(levelHelpDescription);
    levelHelpDescription.innerHTML = data[level].help.description;

    const levelHelpSubtitle: HTMLElement | null = document.createElement('h5');
    levelHelpSubtitle.classList.add('levels-help-subtitle');
    levelHelp.appendChild(levelHelpSubtitle);
    levelHelpSubtitle.innerHTML = data[level].help.subtitle;

    const levelHelpExample: HTMLElement | null = document.createElement('span');
    levelHelpExample.classList.add('levels-help-example');
    levelHelp.appendChild(levelHelpExample);
    levelHelpExample.innerHTML = data[level].help.example;
  }
};
