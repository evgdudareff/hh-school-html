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
  //Способ получения
  const deliveryMethod = document.querySelector(
    "input[name=deliveryMethod]:checked"
  ).value;

  //Город
  const cityLocataion = document.querySelector(".select-field__option")
    .innerHTML;

  //Способ оплаты
  const paymentMethod = document.querySelector(
    "input[name=paymentMethod]:checked"
  ).value;

  //СМС уведомления
  let smsNotification = false;
  if (document.querySelector("input[name=smsNotification]:checked")) {
    smsNotification = true;
  }

  //Пользователь может изменить размер в форме.
  //На случай изменений, сохранить последний выбор
  const checkedSize = document.querySelector(".radio-button-size-item:checked");
  if (checkedSize) {
    productData.checkedSize = checkedSize.value;
  }

  //Данные формы
  let formData = {};
  formData.contactInfo = {};
  for (let i = 0; i < inputs.length; i++) {
    formData.contactInfo[inputs[i].name] = inputs[i].value;
  }
  formData.contactInfo[textarea.name] = textarea.value;
  formData.deliveryMethod = deliveryMethod;
  formData.cityLocataion = cityLocataion;
  formData.paymentMethod = paymentMethod;
  formData.smsNotification = smsNotification;
  formData.productData = productData;

  console.log(formData);
  console.log("Спасибо!");

  //Скрыть форму
  const currentForm = document.querySelector(".orderForm_active");
  currentForm.classList.remove("orderForm_active");
  setTimeout(() => {
    currentForm.remove();
  }, 300);
};
