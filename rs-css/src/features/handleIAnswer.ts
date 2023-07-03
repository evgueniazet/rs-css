import { IData } from "../interfaces/IData";
import { updateLevel } from "./updateLevel";

export const handleAnswer = (data: IData[]) => {
  const submitButton = document.querySelector(".layout-field-text-button");
  const layoutField = document.querySelector(".layout-field");
  const answerInput: HTMLInputElement | null = document.querySelector(
    ".layout-field-text-answer"
  );
  const levelKey = "gameLevel";

  const handleAnswerSubmit = () => {
    const level = Number(localStorage.getItem("gameLevel"));

    if (
      answerInput &&
      Number(answerInput.value) &&
      Number(answerInput.value) < data.length
    ) {
      const newLevelNumber = Number(answerInput.value) - 1;
      localStorage.setItem(levelKey, String(newLevelNumber));
      answerInput.value = "";
      updateLevel(data, Number(newLevelNumber));
    } else {
      const isAnswerCorrect = data[level].answer.some(
        (answer) => answer === answerInput?.value
      );

      if (isAnswerCorrect && answerInput) {
        const newLevel = level + 1;

        answerInput.value = "";
        localStorage.setItem(levelKey, String(newLevel));
        updateLevel(data, newLevel);
      } else {
        layoutField?.classList.add("layout-field-active");

        setTimeout(() => {
          layoutField?.classList.remove("layout-field-active");
        }, 1000);
      }
    }
  };

  if (answerInput) {
    answerInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        handleAnswerSubmit();
      }
    });
  }

  submitButton?.addEventListener("click", () => {
    handleAnswerSubmit();
  });
};
