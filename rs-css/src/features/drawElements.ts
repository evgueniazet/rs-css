import { IData } from "../interfaces/IData";

export const drawElements = (data: IData[], level: number) => {

    const table: HTMLElement | null = document.querySelector('.table')!;
    const tableChildren = table.children;

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }


    const addParentElement = () => {
        if (data[level]) {
            data[level].elements.forEach((item) => {
                // console.log('item', item);

                if (item.children && item.children.length > 0) {
                    item.children.forEach((child) => {
                        // table.innerHTML += item.text[0];
                        console.log('child', item.text[0]);


                    })
                } else {
                    table.innerHTML += item.text[0];
                }
            });


            // data[level].layout.forEach((i) => {

            //     const tableChildrenArr = Array.from(tableChildren);
            //     tableChildrenArr.forEach((element) => {
            //         element.setAttribute('title', i.text);
            //     });
            // });
        }
    };


    const addChildrenElement = () => {

    }


    addParentElement();
    addChildrenElement();
}