export interface IData {
    id: string;
    layout: {
        id: number;
        text: string;
    }[];
    elements: {
        isActive: string;
        text: string;
        elementsInside: string[];
    }[];
    answer: string;
}