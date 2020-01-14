import { showOrderForm } from "./showOrderForm";
import { hideOrderForm } from "./hideOrderForm";
import { selectTowns } from "../select/selectTowns";
import { shutDownSelect } from "../select/shutDownSelect";
import { inputsOrderForm } from "../input/inputsOrderForm";
import { textareaOrderForm } from "../textarea/textareaOrderForm";
import { radioOrderForm } from "../radio/radioOrderForm";
import { prepareToSubmit } from "./prepareToSubmit";

//Событие успешной отправки формы
export const successSubmitForm = new CustomEvent("successSubmitForm", {
  bubbles: true
});

//Работа с формой заказа
export const orderForm = productData => {
  //показать форму заказа
  showOrderForm(productData);

  //назначить обработчик клика по области формы
  const orderForm = document.querySelector(".orderForm");
  orderForm.addEventListener("click", hideOrderForm);
  orderForm.addEventListener("click", shutDownSelect);

  //назначить обработчик клика по кнопке "Закрыть", чтобы скрывать форму
  document
    .querySelector(".button-close-icon")
    .addEventListener("click", hideOrderForm);

  //назначить обработчик события успешной отправки формы
  document.addEventListener("successSubmitForm", hideOrderForm);

  //обработать и получить select выбора городов
  const select = selectTowns();

  //обработать и получить все необходимые для формы inputs
  const inputs = inputsOrderForm();

  //обработать требуемые radio button
  radioOrderForm();

  //обработать и получить обязательное к заполнению textarea для ввода адреса
  const textarea = textareaOrderForm();

  //назначать обработчик клика на кнопку "оформить заказ"
  const submitButton = document.querySelector(".form__button-submit");
  submitButton.addEventListener("click", e => {
    e.preventDefault();
    const result = prepareToSubmit({ inputs, textarea, productData });
    if (result) {
      //если форма отправлена успешна, то генерировать событие
      orderForm.dispatchEvent(successSubmitForm);
    }
  });
};
