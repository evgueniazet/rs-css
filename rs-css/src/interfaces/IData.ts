interface ILayoutItem {
    id: number;
    text: string;
}

interface IElement {
    id: string | number;
    isActive: string;
    text: string;
    children?: IElement[];
}

export interface IData {
    id: string;
    layout: ILayoutItem[];
    elements: IElement[];
    answer: string[];
}
