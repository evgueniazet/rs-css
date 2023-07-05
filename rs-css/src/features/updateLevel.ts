import { ElementDrawer } from './elementDrawer';
import { LayoutDrawer } from './layoutDrawer';
import { handleLayoutItems } from './handleLayoutItems';
import { handleTableElements } from './handleTableElements';
import { IData } from '../interfaces/IData';
import { changeLevel } from './changeLevel';
import { addHelpDescription } from './addHelpDescription';

export const updateLevel = (data: IData[], level: number): void => {
  const elementDrawer = new ElementDrawer(data, level);
  elementDrawer.drawElements();

  const layoutDrawer = new LayoutDrawer(data, level);
  layoutDrawer.drawLayout();

  handleTableElements();
  handleLayoutItems(data, level);
  changeLevel(data, level);
  addHelpDescription(data, level);
};
