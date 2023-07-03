import "./styles/styles.scss";
import data from "./data.json";
import { drawElements } from "./features/drawElements";
import { drawLayout } from "./features/drawLayout";
import { handleTableElements } from "./features/handleTableElements";
import { handleAnswer } from "./features/handleIAnswer";
import { handleHelpButton } from "./features/handleHelpButton";
import { handleLayoutItems } from "./features/handleLayoutItems";

const level = Number(localStorage.getItem("gameLevel"));

drawElements(data, level);
drawLayout(data, level);
handleTableElements();
handleLayoutItems(data, level);
handleAnswer(data);
handleHelpButton(data, level);
