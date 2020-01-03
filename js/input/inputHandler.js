import { InputValidation } from "./InputValidation";

//Обработчик для input
export const inputHandler = input => {
  //присвоить необходимые для валидации общие свойства и методы для input
  input.validation = new InputValidation();
  input.touched = false;

  //В зависимости от функциональной принадлежности input - добавить дополнительные проверки
  if (input.name === "email") input.validation.validities.push(isEmailInvalid);

  if (input.name === "operatorCode")
    input.validation.validities.push(isOperatorCodeInvalid);

  if (input.name === "telNumber")
    input.validation.validities.push(isTelNumberInvalid);

  //Назначить обработчик нажатия на клавиатуру внутри поля input
  input.addEventListener("keyup", e => {
    //Если переключение при помощи Tab, то не обрабатывать
    if (e.code === "Tab") return;

    //отметить, что с текущим input уже работали
    if (!input.touched) {
      input.touched = true;
    }
    //Провести проверку вводимого пользователем значения
    input.validation.checkValidities(input);
  });
};

///////

//Проверка валидности ввода email адреса
function isEmailInvalid(input) {
  const match = input.value.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (!match) {
    return "Введите корректный email-адрес";
  }
}

//Проверка валидности ввода кода оператор телефона
function isOperatorCodeInvalid(input) {
  const match = input.value.match(/\b\d{3}\b/);

  if (!match) {
    return "Введите валидный цифровой код оператора длиной 3 символа";
  }
}

//Проверка валидности ввода номера телефона
function isTelNumberInvalid(input) {
  const match = input.value.match(/\b\d{7}\b/);

  if (!match) {
    return "Введите валидный номер телефона длиной 7 символов";
  }
}

///////
