import './styles/styles.scss';
import data from './data.json';
import { ElementDrawer } from './features/elementDrawer';
import { LayoutDrawer } from './features/layoutDrawer';
import { handleTableElements } from './features/handleTableElements';
import { handleAnswer } from './features/handleIAnswer';
import { handleHelpButton } from './features/handleHelpButton';
import { handleLayoutItems } from './features/handleLayoutItems';
import { changeLevel } from './features/changeLevel';
import { addHelpDescription } from './features/addHelpDescription';
import { handleChangeLevelButtons } from './features/handleChangeLevelButtons';

const level = Number(localStorage.getItem('gameLevel'));

const elementDrawer = new ElementDrawer(data, level);
elementDrawer.drawElements();

const layoutDrawer = new LayoutDrawer(data, level);
layoutDrawer.drawLayout();

handleTableElements();
handleLayoutItems(data, level);
handleAnswer(data);
handleHelpButton(data);
changeLevel(data, level);
addHelpDescription(data, level);
handleChangeLevelButtons(data);
