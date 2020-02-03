// получаем координаты элемента в контексте документа
export const getCoords = elem => {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
};
