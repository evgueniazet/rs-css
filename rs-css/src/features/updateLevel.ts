import { drawElements } from "./drawElements";
import { drawLayout } from "./drawLayout";
import { handleTableElements } from "./handleTableElements";
import { IData } from "../interfaces/IData";


export const updateLevel = (data: IData[], level: string) => {

    drawElements(data, Number(level));
    drawLayout(data, level);
    handleTableElements(data);
};