import { IData } from '../interfaces/IData';

export const handleAnswer = (data: IData[]) => {
    const answer: HTMLInputElement | null = document.querySelector('.layout-field-text-answer');
    const submitButton = document.querySelector('.layout-field-text-button');
    const tableWrapper = document.querySelector('.table-wrapper');
    const layoutField = document.querySelector('.layout-field');
    const levelKey = 'gameLevel';

    const handleAnswerSubmit = () => {
        if (tableWrapper) {
            const tableWrapperId = tableWrapper.getAttribute('id');

            data.forEach((elem) => {
                if (elem.id === tableWrapperId) {
                    elem.answer.forEach((answerItem) => {
                        if (elem.answer.includes(answerItem)) {
                            answerItem = '';
                            let level = localStorage.getItem(levelKey);
                            if (level) {
                                level = String(Number(level) + 1);
                                localStorage.setItem(levelKey, level);
                            }

                        } else {
                            layoutField?.classList.add('layout-field-active');
                            setTimeout(() => {
                                layoutField?.classList.remove('layout-field-active');
                            }, 1000);
                        }
                    })
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
