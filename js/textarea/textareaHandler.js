import { FieldValidation } from "../common/FieldValidation";

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
};
