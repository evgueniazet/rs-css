import './styles/styles.scss';
import data from './data.json';
import { drawTable } from './features/drawTable';
import { drawLayout } from './features/drawLayout';
import { handleTableElements } from './features/handleTableElements';
const hljs = require('highlight.js');

drawTable(data);
drawLayout(data);
handleTableElements(data);