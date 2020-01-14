import { shutDownSelect } from "./shutDownSelect";
import { openUpSelect } from "./openUpSelect";

export const selectHandler = e => {
  let target = e.target;

  //Если клик по активному селекту, то cкрыть options-container
  if (target.closest(".select_active")) {
    shutDownSelect();
    document.querySelector(".input-select").disabled = "";
  } else {
    //иначе открыть
    while (!target.classList.contains("select")) {
      target = target.parentNode;
    }
    openUpSelect(target);
  }
};
