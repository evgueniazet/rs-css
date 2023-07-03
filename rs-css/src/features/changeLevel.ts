import { IData } from "../interfaces/IData";
import { updateLevel } from "./updateLevel";

export const changeLevel = (level: number, data: IData[]) => {
  const levelsTitle = document.querySelector(".levels-title");
  const levelPrevButton = document.querySelectorAll(".levels-button")[0];
  const levelNextButton = document.querySelectorAll(".levels-button")[1];
  const levelKey = "gameLevel";

  if (levelsTitle) {
    levelsTitle.innerHTML = `Level ${level + 1} from ${data.length}`;
  }

  const handleLevelPrevButton = () => {
    if (level > 0) {
      localStorage.setItem(levelKey, String(level - 1));
      updateLevel(data, level - 1);
    }
  };

  const handleLevelNextButton = () => {
    if (level + 1 < data.length) {
      localStorage.setItem(levelKey, String(level + 1));
      updateLevel(data, level + 1);
    }
  };

  levelPrevButton.addEventListener("click", handleLevelPrevButton);
  levelNextButton.addEventListener("click", handleLevelNextButton);
};
