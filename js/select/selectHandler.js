import { getDataAsync } from "../common/getDataAsync";
import { renderSelectOptions } from "./renderSelectOptions";
import { getCoords } from "../common/getCoords";

export const selectHandler = e => {
  let target = e.target;
  while (!target.classList.contains("form")) {
    if (target.classList.contains("select_active")) {
      target.classList.remove("select_active");
      document.querySelector(".options-container").remove();
      return;
    }

    if (target.classList.contains("select")) break;
    target = target.parentNode;
  }

  //Получить координаты select-field для позиционирования контейнера option
  let pivotCoords = getCoords(target);

  //Сместить координату top на высоту select-field
  pivotCoords.top += target.offsetHeight;

  target.classList.add("select_active");

  //Получить данные адресов для селектора
  getDataAsync("https://api.hh.ru/areas/113").then(parsedData => {
    //Для примера берем Московскую область, 7 городов
    const areas = parsedData.areas[21].areas.slice(0, 7);

    //Начать рендеринг опций селектора
    const optionsContainer = renderSelectOptions(areas);
    optionsContainer.top = pivotCoords.top + "px";
    optionsContainer.left = pivotCoords.left + "px";
    optionsContainer.style.width = target.offsetWidth + "px";

    target.append(optionsContainer);

    //Назначить обработчик клика по опции в селекторе
    document.querySelectorAll(".options-container__item").forEach(option => {
      option.addEventListener("click", e => {
        const checkedArea = e.target.innerHTML;
        document.querySelector(".select-field__option").innerHTML = checkedArea;

        //Скрыть выбор опций селектора
        setTimeout(() => {
          document.querySelector(".select").classList.remove("select_active");
          document.querySelector(".options-container").remove();
        }, 0);
      });
    });
  });
};
