import { shutDownSelect } from "./shutDownSelect";
import { getDataAsync } from "../common/getDataAsync";
import { renderSelectOptions } from "./renderSelectOptions";

//открывает options-container закрытого селектора
export const openUpSelect = selectBlock => {
  selectBlock.classList.add("select_active");
  document.querySelector(".input-select").disabled = "disabled";

  //Получить данные адресов для селектора
  getDataAsync("https://api.hh.ru/areas/113").then(parsedData => {
    //Для примера берем Московскую область, 7 городов
    const areas = parsedData.areas[21].areas.slice(0, 7);

    //Начать рендеринг опций селектора
    const optionsContainer = renderSelectOptions(areas);

    selectBlock.append(optionsContainer);

    //Назначить обработчик клика по опции в селекторе
    document.querySelectorAll(".options-container__item").forEach(option => {
      option.addEventListener("click", e => {
        e.stopPropagation();
        const checkedArea = e.target.innerHTML;
        document.querySelector(".input-select").placeholder = checkedArea;

        //Скрыть выбор опций селектора
        shutDownSelect();
      });
    });
  });
};
