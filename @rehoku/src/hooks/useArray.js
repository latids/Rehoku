import { useState } from "react";

function useArray(initialArray) {
  const [array, setArray] = useState(initialArray);

  const addItem = (item) => {
    setArray([...array, item]);
  };

  const removeItem = (index) => {
    const newArray = array.filter((_, i) => i !== index);
    setArray(newArray);
  };

  const updateItem = (index, newItem) => {
    const newArray = array.map((item, i) => (i === index ? newItem : item));
    setArray(newArray);
  };

  const clearArray = () => {
    setArray([]);
  };

  const getItem = (index) => {
    return array[index];
  };

  const findItem = (condition) => {
    return array.find(condition);
  };

  const sortArray = (compareFunction) => {
    const newArray = [...array];
    newArray.sort(compareFunction);
    setArray(newArray);
  };

  const swapItems = (index1, index2) => {
    const newArray = [...array];
    [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
    setArray(newArray);
  };

  const filterArray = (condition) => {
    const newArray = array.filter(condition);
    setArray(newArray);
  };

  return {
    array,
    addItem,
    removeItem,
    updateItem,
    clearArray,
    getItem,
    findItem,
    sortArray,
    swapItems,
    filterArray,
  };
}

export default useArray;
