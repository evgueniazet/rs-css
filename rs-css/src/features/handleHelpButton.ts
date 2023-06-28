import { IData } from '../interfaces/IData';

export const handleHelpButton = (data: IData[]): void => {
  const helpButton = document.querySelector('.content-button');
  const tableWrapper = document.querySelector('.table-wrapper');
  const answer: HTMLInputElement | null = document.querySelector('.layout-field-text-answer');

  const handleHelpButtonClick = () : void => {
    if (tableWrapper) {
      const tableWrapperId = tableWrapper.getAttribute('id');

      data.forEach((elem) => {
        if (elem.id === tableWrapperId) {
          answer?.classList.add('layout-field-text-answer-active');

          if (answer) {
            answer.value = elem.answer;
          }
        }
      });
    }
  };

  helpButton?.addEventListener('click', handleHelpButtonClick);
};
