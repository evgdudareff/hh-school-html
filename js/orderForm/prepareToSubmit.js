export const prepareToSubmit = optData => {
  const { productData, inputs, textarea } = optData;

  //Контакная информация и расширенный адрес - обязательные поля.
  //проверить, все ли требуемые элементы прошли валидацию
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].validation.isInvalid) {
      console.log("Заполните требуемые поля формы");
      return;
    }
  }
  if (textarea.validation.isInvalid) {
    console.log("Заполните требуемые поля формы");
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
  const checkedSize = document.querySelector(".radio-button-size-item:checked")
    .value;
  productData.checkedSize = checkedSize;

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

  const currentForm = document.querySelector(".orderForm_active");
  currentForm.classList.remove("orderForm_active");
  setTimeout(() => {
    currentForm.remove();
  }, 300);
};
