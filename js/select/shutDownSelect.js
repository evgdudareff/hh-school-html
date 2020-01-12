//скрывает options-container открытого селектора
export const shutDownSelect = () => {
  document.querySelector(".select").classList.remove("select_active");
  document.querySelector(".input-select").disabled = "";
  document.querySelector(".options-container").remove();
};
