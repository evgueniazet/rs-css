export const createNewMarkedItemsArr = (arr: number[]) => {
  let newArr = arr;

  if (newArr.length > 1) {
    newArr = Array.from(
      { length: newArr[1] - newArr[0] + 1 },
      (_, index) => newArr[0] + index
    );
  }

  return newArr;
};
