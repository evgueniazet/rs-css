import './styles/styles.scss';
import data from './data.json';
import { drawTable } from './features/drawTable';
import { drawLayout } from './features/drawLayout';
import { handleTableElements } from './features/handleTableElements';
import { handleAnswer } from './features/handleIAnswer';
// const hljs = require('highlight.js');

drawTable(data);
drawLayout(data);
handleTableElements(data);
handleAnswer(data);