import { selectHandler } from "./selectHandler";

//Возвращает обработанный select для выбора городов
export const selectTowns = () => {
  //Обработать селектор города
  const select = document.querySelector(".select");
  if (select) {
    select.addEventListener("click", selectHandler);
    select.addEventListener("input", e => {
      e.target.value = "";
    });
    return select;
  }
};
