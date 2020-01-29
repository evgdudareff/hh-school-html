import { FieldValidation } from "../common/FieldValidation";
import { removeValidationError } from "../common/validationError";

//обработчик для textarea
export const textareaHandler = textarea => {
  textarea.validation = new FieldValidation();
  textarea.touched = false;

  //Назначить обработчик нажатия на клавиатуру внутри поля input
  textarea.addEventListener("keyup", e => {
    //Если переключение при помощи Tab, то не обрабатывать
    if (e.code === "Tab") return;

    //отметить, что с текущим textarea уже работали
    if (!textarea.touched) {
      textarea.touched = true;
    }
    //Провести проверку вводимого пользователем значения
    textarea.validation.checkValidities(textarea);
  });

  //Назначить обработчик ухода с поля textarea
  textarea.addEventListener("blur", e => {
    //убрать ошибки валидации при фокусе
    removeValidationError(textarea);
  });
};
