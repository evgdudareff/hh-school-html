import { textareaHandler } from "./textareaHandler";

//Обработать и получить обязательное к заполнению textarea на форме заказа
export const textareaOrderForm = () => {
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textareaHandler(textarea);
    return textarea;
  }
};
