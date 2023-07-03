import { IData } from "../interfaces/IData";

export const handleHelpButton = (data: IData[], level: number): void => {
  const helpButton = document.querySelector(".content-button");
  const answer: HTMLInputElement | null = document.querySelector(
    ".layout-field-text-answer"
  );

  const handleHelpButtonClick = (): void => {
    data[level].answer.forEach((answerItem) => {
      if (answer) {
        answer.classList.add("layout-field-text-answer-active");
        answer.value = answerItem;
      }
    });
  };
  helpButton?.addEventListener("click", handleHelpButtonClick);
};
