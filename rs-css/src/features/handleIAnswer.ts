import { IData } from '../interfaces/IData';
import { drawElements } from './drawElements';
import { drawLayout } from './drawLayout';

export const handleAnswer = (data: IData[]) => {
    const submitButton = document.querySelector('.layout-field-text-button');
    const tableWrapper = document.querySelector('.table-wrapper');
    const layoutField = document.querySelector('.layout-field');
    const answer: HTMLInputElement | null = document.querySelector('.layout-field-text-answer');
    const levelKey = 'gameLevel';

    const handleAnswerSubmit = () => {
        if (tableWrapper) {
            const tableWrapperId = tableWrapper.getAttribute('id');

            data.forEach((elem) => {
                if (elem.id === tableWrapperId) {
                    // const answer: HTMLInputElement | null = document.querySelector('.layout-field-text-answer');

                    if (answer) {

                        console.log('answer.value', answer.value);

                        const hasCorrectAnswer = data.some((elem) => elem.answer.includes(answer.value));

                        if (hasCorrectAnswer) {
                            let level = localStorage.getItem(levelKey);
                            if (level) {
                                answer.value = '';
                                level = String(Number(level) + 1);
                                localStorage.setItem(levelKey, level);
                                drawElements(data, Number(level));
                                drawLayout(data, level);
                            }
                        } else {
                            layoutField?.classList.add('layout-field-active');
                            setTimeout(() => {
                                layoutField?.classList.remove('layout-field-active');
                            }, 1000);
                        }
                    }
                }
            });
        }
    };

    const submitHandler = () => {
        handleAnswerSubmit();
    };

    if (answer) {
        answer.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                handleAnswerSubmit();
            }
        });
    }


    submitButton?.addEventListener('click', submitHandler);
};
