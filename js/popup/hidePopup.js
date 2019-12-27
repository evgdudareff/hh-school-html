export const hidePopup = e => {
  let target = e.target;

  while (!target.classList.contains("body")) {
    target = target.parentNode;

    //если клик по активному попапу, то ничего не делать
    if (target.classList.contains("popup_active")) {
      return;
    }

    //если клик на кнопку "Закрыть", то скрыть попап
    if (target.classList.contains("popup-container__button-close")) {
      break;
    }
  }

  const currentPopup = document.querySelector(".popup_active");
  if (currentPopup) {
    currentPopup.classList.remove("popup_active");
    setTimeout(() => {
      currentPopup.remove();
    }, 300);
  }
};
