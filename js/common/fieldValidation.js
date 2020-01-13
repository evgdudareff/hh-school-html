//Класс валидации для field.
//Содержит массив validaties, в который помещаются необходимые проверки,
//а также общие для field методы
import { showValidationError, removeValidationError } from "./validationError";

export class FieldValidation {
  constructor() {
    this.validities = [this.isEmptyField, this.isBigString];
    this.errors = [];
    this.isInvalid = true;
  }

  //Провести необходимые валидации
  checkValidities(field) {
    if (field.touched) {
      this.validities.forEach(validity => {
        const error = validity(field);

        //Текущие ошибки храним в this.errors
        //(может понадобиться, если потребуется выводить информация пользователю)
        if (error) this.errors.push(error);
      });

      //Обработать ошибки
      field.validation.handleErrors(field);
    }
  }

  //Выставить класс _invalid для field
  setInvalid(field) {
    const className = getClassName(field);
    if (!field.classList.contains(`${className}_invalid`)) {
      field.classList.add(`${className}_invalid`);
    }
    this.isInvalid = true;
  }

  //Убрать класс _invalid для input
  removeInvalid(field) {
    const className = getClassName(field);
    if (field.classList.contains(`${className}_invalid`)) {
      field.classList.remove(`${className}_invalid`);
    }
    this.isInvalid = false;
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
      showValidationError(field, this.errors);
      this.errors = [];
    } else {
      this.removeInvalid(field);
      removeValidationError(field);
    }
  }

  //Отладочная функция - выводит текущие ошибки в консоль
  showErrors() {
    if (this.errors.length) {
      for (let i = 0; i < this.errors.length; i++) {
        console.log(this.errors[i]);
      }
      this.errors = [];
    }
  }
}

function getClassName(elem) {
  if (elem.className.match(/input/)) {
    return "input";
  } else if (elem.className.match(/textarea/)) {
    return "textarea";
  }
}
