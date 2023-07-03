import { IData } from "../interfaces/IData";

export const handleHelpButton = (data: IData[]): void => {
  const helpButton = document.querySelector(".content-button");
  const tableWrapper = document.querySelector(".table-wrapper");
  const answer: HTMLInputElement | null = document.querySelector(
    ".layout-field-text-answer"
  );

  const handleHelpButtonClick = (): void => {
    console.log("click");
  };
  helpButton?.addEventListener("click", handleHelpButtonClick);
};
