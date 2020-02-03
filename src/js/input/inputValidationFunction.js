//содержит необходимые для валидации input функции

//Проверка валидности ввода email адреса
export const isEmailInvalid = input => {
  const match = input.value.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (!match) {
    return "Введите корректный email-адрес";
  }
};

//Проверка валидности ввода кода оператор телефона
export const isOperatorCodeInvalid = input => {
  const match = input.value.match(/\b\d{3}\b/);

  if (!match) {
    return "Введите валидный цифровой код оператора длиной 3 символа";
  }
};

//Проверка валидности ввода номера телефона
export const isTelNumberInvalid = input => {
  const match = input.value.match(/\b\d{7}\b/);

  if (!match) {
    return "Введите валидный номер телефона длиной 7 символов";
  }
};
