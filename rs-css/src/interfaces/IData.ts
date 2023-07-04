interface ILayoutItem {
  id: string;
  text: string;
}

interface IElement {
  id: string;
  text: string;
  children?: IElement[];
}

export interface IData {
  id: string;
  layout: ILayoutItem[];
  elements: IElement[];
  answer: string[];
  help: {
    title: string;
    description: string;
    subtitle: string;
    example: string;
  };
}
