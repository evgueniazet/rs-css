import './styles/styles.scss';
import data from './data.json';
import { drawTable } from './features/drawTable';
import { drawLayout } from './features/drawLayout';
import { handleTableElements } from './features/handleTableElements';
import { handleAnswer } from './features/handleIAnswer';
import { handleHelpButton } from './features/handleHelpButton';
// const hljs = require('highlight.js');

const level = localStorage.getItem('gameLevel');

drawTable(data);
handleTableElements(data);
handleAnswer(data);
handleHelpButton(data);

if (level !== null) {
    drawLayout(data, level);
}
