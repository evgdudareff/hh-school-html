import { showOrderForm } from "./showOrderForm";
import { hideOrderForm } from "./hideOrderForm";
import { selectTowns } from "../select/selectTowns";
import { inputsOrderForm } from "../input/inputsOrderForm";
import { textareaOrderForm } from "../textarea/textareaOrderForm";
import { prepareToSubmit } from "./prepareToSubmit";

//Работа с формой заказа
export const orderForm = productData => {
  //показать форму заказа
  showOrderForm(productData);

  //назначить обработчик клика по области вне формы
  document.querySelector(".orderForm").addEventListener("click", hideOrderForm);

  //назначить обработчик клика по кнопке "Закрыть", чтобы скрывать форму
  document
    .querySelector(".button-close-icon")
    .addEventListener("click", hideOrderForm);

  //обработать и получить select выбора городов
  const select = selectTowns();

  //обработать и получить все необходимые для формы inputs
  const inputs = inputsOrderForm();

  //обработать и получить обязательное к заполнению textarea для ввода адреса
  const textarea = textareaOrderForm();

  //назначать обработчик клика на кнопку "оформить заказ"
  const submitButton = document.querySelector(".form__button-submit");
  submitButton.addEventListener("click", e => {
    e.preventDefault();
    prepareToSubmit({ inputs, textarea, productData });
  });
};
