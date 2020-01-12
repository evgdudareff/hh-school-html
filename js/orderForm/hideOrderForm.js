export const hideOrderForm = e => {
  let target = e.target;

  while (
    !target.classList.contains("orderForm") ||
    e.type !== "successSubmitForm"
  ) {
    //если клик по форме, то ничего не делать
    if (target.classList.contains("form")) {
      return;
    }

    //если клик вне формы, то скрыть форму
    if (target.classList.contains("orderForm")) {
      break;
    }
    //если клик на кнопку "Закрыть", то скрыть форму
    if (target.classList.contains("form__button-close")) {
      break;
    }

    target = target.parentNode;
  }

  event.preventDefault();
  const currentForm = document.querySelector(".orderForm_active");

  if (currentForm) {
    currentForm.classList.remove("orderForm_active");
    setTimeout(() => {
      currentForm.remove();
    }, 300);
  }
};
