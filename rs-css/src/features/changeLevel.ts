import { IData } from "../interfaces/IData";

export const changeLevel = (data: IData[], level: number) => {
  const levelsTitle = document.querySelector(".levels-title");

  if (levelsTitle) {
    levelsTitle.innerHTML = `Level ${level + 1} from ${data.length}`;
  }
};
