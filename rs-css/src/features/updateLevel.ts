import { drawElements } from "./drawElements";
import { drawLayout } from "./drawLayout";
import { handleLayoutItems } from "./handleLayoutItems";
import { handleTableElements } from "./handleTableElements";
import { IData } from "../interfaces/IData";
import { handleHelpButton } from "./handleHelpButton";
import { changeLevel } from "./changeLevel";
import { addHelpDescription } from "./addHelpDescription";

export const updateLevel = (data: IData[], level: number) => {
  drawElements(data, level);
  drawLayout(data, level);
  handleTableElements();
  handleLayoutItems(data, level);
  changeLevel(data, level);
  addHelpDescription(data, level);
};
