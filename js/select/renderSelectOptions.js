export const renderSelectOptions = dataList => {
  let optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");

  dataList.forEach(dataItem => {
    optionsContainer.innerHTML += `<option class="options-container__item" value=${dataItem.name}>${dataItem.name}</option>\n`;
  });

  return optionsContainer;
};
