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

    //если были показаны ошибки валидации,то убрать при очередном наборе
    removeValidationError(textarea);
  });

  //Назначить обработчик ухода с поля textarea
  textarea.addEventListener("blur", e => {
    //если с полем уже работали, то при уходе проверить поле на ошибки и отобразить их пользователю
    if (textarea.touched) {
      textarea.validation.checkValidities(textarea);
    }
  });
};
