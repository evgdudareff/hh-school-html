import { successSubmitForm } from "./orderForm";

export const prepareToSubmit = optData => {
  const { productData, inputs, textarea } = optData;

  //Контакная информация и расширенный адрес - обязательные поля.
  //проверить, все ли требуемые элементы прошли валидацию
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].validation.isInvalid) {
      //Указать на первое поле, которое не валидно
      inputs[i].touched = true;
      inputs[i].validation.checkValidities(inputs[i]);
      return;
    }
  }
  if (textarea.validation.isInvalid) {
    //Указать, что расширенный адрес не прошёл валидацию
    textarea.touched = true;
    textarea.validation.checkValidities(textarea);
    return;
  }

  //Если всё ОК, то подготовить данные для отправки
  let formData = {};
  //Сохранить значения всех inputs
  const allInputs = document.querySelectorAll("input");
  [].forEach.call(allInputs, input => {
    if (input.type === "text" || (input.type === "radio" && input.checked)) {
      formData[input.name] = input.value;
    } else if (input.type === "checkbox") {
      formData[input.name] = input.checked ? true : false;
    }
  });

  //Сохранить значения textarea
  formData[textarea.name] = textarea.value;

  //Пользователь может изменить размер в форме.
  //На случай изменений, сохранить последний выбор
  const checkedSize = document.querySelector(".radio-button-size-item:checked");
  if (checkedSize) {
    productData.checkedSize = checkedSize.value;
  }

  //Добавить данные по выбранному товару
  formData.productData = productData;

  console.log(formData);
  console.log("Спасибо!");

  return true;
};
