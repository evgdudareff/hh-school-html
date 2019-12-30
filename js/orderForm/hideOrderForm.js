export const hideOrderForm = e => {
  event.preventDefault();
  let target = e.target;

  while (!target.classList.contains("orderForm")) {
    target = target.parentNode;

    //если клик на кнопку "Закрыть", то скрыть форму
    if (target.classList.contains("form__button-close")) {
      break;
    }
  }

  const currentForm = document.querySelector(".orderForm_active");

  if (currentForm) {
    currentForm.classList.remove("orderForm_active");
    setTimeout(() => {
      currentForm.remove();
    }, 300);
  }
};
