import { FieldValidation } from "../common/FieldValidation";
import { removeValidationError } from "../common/validationError";
import {
  isEmailInvalid,
  isOperatorCodeInvalid,
  isTelNumberInvalid
} from "./inputValidationFunction";

//Обработчик для input
export const inputHandler = input => {
  //присвоить необходимые для валидации общие свойства и методы для input
  input.validation = new FieldValidation();
  input.touched = false;

  //В зависимости от функциональной принадлежности input - добавить дополнительные проверки
  if (input.name === "email") input.validation.validities.push(isEmailInvalid);

  if (input.name === "operatorCode")
    input.validation.validities.push(isOperatorCodeInvalid);

  if (input.name === "telNumber")
    input.validation.validities.push(isTelNumberInvalid);

  input.addEventListener("keyup", e => {
    //Если переключение при помощи Tab, то не обрабатывать
    if (e.code === "Tab") return;

    //иначе отметить, что с текущим input уже работали
    if (!input.touched) {
      input.touched = true;
    }

    input.validation.checkValidities(input);
  });

  //Назначить обработчик ухода с поля input
  input.addEventListener("blur", e => {
    //убрать ошибки валидации при фокусе
    removeValidationError(input);
  });
};
