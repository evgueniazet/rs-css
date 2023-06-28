import { IData } from '../interfaces/IData';

export const handleAnswer = (data: IData[]) => {
  const answer: HTMLInputElement | null = document.querySelector('.layout-field-text-answer');
  const submitButton = document.querySelector('.layout-field-text-button');
  const tableWrapper = document.querySelector('.table-wrapper');
  const layoutField = document.querySelector('.layout-field');

  const handleAnswerSubmit = () => {
    if (tableWrapper) {
      const tableWrapperId = tableWrapper.getAttribute('id');

      data.forEach((elem) => {
        if (elem.id === tableWrapperId) {
          if (elem.answer === answer?.value) {
            // console.log('правильный ответ');
            answer.value = '';
          } else {
            // console.log('неправильный ответ');
            layoutField?.classList.add('layout-field-active');
            setTimeout(() => {
              layoutField?.classList.remove('layout-field-active');
            }, 1000);
          }
        }
      });
    }
  };

  if (answer) {
    answer.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        handleAnswerSubmit();
      }
    });
  }

  submitButton?.addEventListener('click', handleAnswerSubmit);
};
