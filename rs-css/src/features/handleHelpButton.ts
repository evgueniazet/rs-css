import { IData } from "../interfaces/IData";

export const handleHelpButton = (data: IData[]): void => {
  const helpButton: HTMLButtonElement | null =
    document.querySelector(".content-button");
  const answer: HTMLInputElement | null = document.querySelector(
    ".layout-field-text-answer"
  );

  let isProcessing = false;

  const handleHelpButtonClick = (): void => {
    const level = Number(localStorage.getItem("gameLevel"));

    if (isProcessing) {
      return;
    }

    isProcessing = true;

    if (answer) {
      let counter = 0;
      const interval = setInterval(() => {
        if (counter <= data[level].answer[0].length) {
          answer.value = data[level].answer[0].slice(0, counter);
        } else {
          clearInterval(interval);
          isProcessing = false;
        }

        counter++;
      }, 200);
    }
  };

  helpButton?.addEventListener("click", handleHelpButtonClick);
};
