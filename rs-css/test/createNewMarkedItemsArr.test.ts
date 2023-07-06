import { createNewMarkedItemsArr } from "../src/utils/createNewMarkedItemsArr";

describe("createNewMarkedItemsArr", () => {
  test("createNewMarkedItemsArr returns an empty array for an empty input array", () => {
    const arr: [] = [];
    const result = createNewMarkedItemsArr(arr);
    expect(result).toEqual([]);
  });

  test("createNewMarkedItemsArr returns an array with a single element for an input array with a single element", () => {
    const arr = [5];
    const result = createNewMarkedItemsArr(arr);
    expect(result).toEqual([5]);
  });

  test("createNewMarkedItemsArr returns a new array with items within the range of the input array for an input array with two elements", () => {
    const arr = [3, 7];
    const result = createNewMarkedItemsArr(arr);
    expect(result).toEqual([3, 4, 5, 6, 7]);
  });
});
