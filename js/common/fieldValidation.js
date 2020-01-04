//Класс валидации для field.
//Содержит массив validaties, в который помещаются необходимые проверки,
//а также общие для field методы

export class FieldValidation {
  constructor() {
    this.validities = [this.isEmptyField, this.isBigString];
    this.errors = [];
  }

  //Провести необходимые валидации
  checkValidities(field) {
    if (field.touched) {
      for (var i = 0; i < this.validities.length; i++) {
        const error = this.validities[i](field);

        //Текущие ошибки храним в this.errors
        //(может понадобиться, если потребуется выводить информация пользователю)
        if (error) this.errors.push(error);
      }

      //Обработать ошибки
      field.validation.handleErrors(field);
    }
  }

  //Выставить класс _invalid для field
  setInvalid(field) {
    const className = field.tagName.toLowerCase();
    if (!field.classList.contains(`${className}_invalid`)) {
      field.classList.add(`${className}_invalid`);
    }
  }

  //Убрать класс _invalid для input
  removeInvalid(field) {
    const className = field.tagName.toLowerCase();
    if (field.classList.contains(`${className}_invalid`)) {
      field.classList.remove(`${className}_invalid`);
    }
  }

  //Общая для всех field проверка на пустой ввод
  isEmptyField(field) {
    if (!field.value.trim()) {
      return "Поле не может быть пустым";
    }
  }

  //Общая для всех field проверка на максимальную длину строки
  isBigString(field) {
    if (field.value.length > 100) {
      return "Максимальная длина строки 100 символов";
    }
  }

  //Обработать текущие ошибки валидации
  handleErrors(field) {
    if (this.errors.length) {
      this.setInvalid(field);
      //Отладочная функция showErrors выводит ошибки в консль
      this.showErrors();
    } else {
      this.removeInvalid(field);
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
