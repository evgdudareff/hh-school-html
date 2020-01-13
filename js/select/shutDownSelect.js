//скрывает options-container открытого селектора
export const shutDownSelect = () => {
  const optionsContainer = document.querySelector(".options-container");
  if (optionsContainer) {
    document.querySelector(".select").classList.remove("select_active");
    document.querySelector(".input-select").disabled = "";
    optionsContainer.remove();
  }
};
