export const hideOrderForm = e => {
  let target = e.target;

  while (!target.classList.contains("orderForm")) {
    target = target.parentNode;

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
