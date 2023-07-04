import { IData } from "../interfaces/IData";
import { updateLevel } from "./updateLevel";

export const handleChangeLevelButtons = (data: IData[]) => {
  const levelPrevButton = document.querySelectorAll(".levels-button")[0];
  const levelNextButton = document.querySelectorAll(".levels-button")[1];
  const levelKey = "gameLevel";

  const handleLevelPrevButton = () => {
    const level = Number(localStorage.getItem("gameLevel"));

    if (level > 0) {
      localStorage.setItem(levelKey, String(level - 1));
      updateLevel(data, level - 1);
    }
  };

  const handleLevelNextButton = () => {
    const level = Number(localStorage.getItem("gameLevel"));
    if (level + 1 < data.length) {
      localStorage.setItem(levelKey, String(level + 1));
      updateLevel(data, level + 1);
    }
  };

  levelPrevButton.addEventListener("click", handleLevelPrevButton);
  levelNextButton.addEventListener("click", handleLevelNextButton);
};
