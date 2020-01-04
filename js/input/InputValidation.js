//Класс валидации для input.
//Содержит массив validaties, в который помезаются необходимые проверки,
//а также общие для input методы

export class InputValidation {
  constructor() {
    this.validities = [this.isEmptyField, this.isBigString];
    this.errors = [];
  }

  //Провести необходимые валидации
  checkValidities(input) {
    if (input.touched) {
      for (var i = 0; i < this.validities.length; i++) {
        const error = this.validities[i](input);

        //Текущие ошибки храним в this.errors
        //(может понадобиться, если потребуется выводить информация пользователю)
        if (error) this.errors.push(error);
      }

      //Обработать ошибки
      input.validation.handleErrors(input);
    }
  }

  //Выставить класс _invalid для input
  setInvalid(input) {
    if (!input.classList.contains("input_invalid")) {
      input.classList.add("input_invalid");
    }
  }

  //Убрать класс _invalid для input
  removeInvalid(input) {
    if (input.classList.contains("input_invalid")) {
      input.classList.remove("input_invalid");
    }
  }

  //Общая для всех input проверка на пустой ввод
  isEmptyField(input) {
    if (!input.value.trim()) {
      return "Поле не может быть пустым";
    }
  }

  //Общая для всех input проверка на максимальную длину строки
  isBigString(input) {
    if (input.value.length > 100) {
      return "Максимальная длина строки 100 символов";
    }
  }

  //Обработать текущие ошибки валидации
  handleErrors(input) {
    if (this.errors.length) {
      this.setInvalid(input);
      //Отладочная функция showErrors выводит ошибки в консль
      this.showErrors();
    } else {
      this.removeInvalid(input);
    }
  }

  //Отладочная функция - выводит текущие ошибки в консоль
  showErrors() {
    if (this.errors.length) {
      for (var i = 0; i < this.errors.length; i++) {
        console.log(this.errors[i]);
      }
      this.errors = [];
    }
  }
}
