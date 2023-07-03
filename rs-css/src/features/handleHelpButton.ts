import { IData } from "../interfaces/IData";

export const handleHelpButton = (data: IData[], level: number): void => {
  const helpButton = document.querySelector(".content-button");
  const answer: HTMLInputElement | null = document.querySelector(
    ".layout-field-text-answer"
  );

  const handleHelpButtonClick = (): void => {
    if (answer) {
      let counter = 0;
      const interval = setInterval(() => {
        if (counter < data[level].answer[0].length) {
          counter++;
          answer.value = data[level].answer[0].slice(0, counter);
        } else {
          clearInterval(interval);
        }
      }, 200);
    }
  };
  helpButton?.addEventListener("click", handleHelpButtonClick);
};
