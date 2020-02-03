import { inputHandler } from "./inputHandler";

//Обработать и получить обязательные к заполнению inputs на форме заказа
export const inputsOrderForm = () => {
  const inputs = document.querySelectorAll(".js-input-required");
  if (inputs) {
    inputs.forEach(input => {
      inputHandler(input);
    });
    return inputs;
  }
};
