//показывает ошибки валидации пользователю
export const showValidationError = (target, errors) => {
  //2.рендер попапа с ошибками
  let errorBlock = document.createElement("ul");
  errorBlock.classList.add("js-error");
  errorBlock.classList.add("form-error-block");
  errorBlock.setAttribute("data-target-name", `${target.name}`);
  errors.forEach(error => {
    errorBlock.innerHTML += `<li class='form-error-block__item'>${error}</li>`;
  });
  errorBlock.style.top = target.offsetHeight + "px";
  target = target.parentNode;
  target.appendChild(errorBlock);
};

//убирает попап с текущими ошибками для поля
export const removeValidationError = target => {
  const currentErrorBlock = document.querySelector(
    `.js-error.form-error-block[data-target-name="${target.name}"]`
  );

  if (currentErrorBlock) {
    currentErrorBlock.remove();
  }
};
