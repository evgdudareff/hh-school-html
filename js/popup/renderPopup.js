//Рендер попапа карточки продукта

export const renderPopup = (popupHTML, coords) => {
  const popup = document.createElement("div");

  popup.classList.add("js-popup");
  popup.classList.add("popup");
  popup.innerHTML = popupHTML;

  //Если есть координаты, значит Tablet/Desktop
  if (coords) {
    popup.style.left = coords.left + "px";
    popup.style.top = coords.top + "px";
  } else {
    //если нет координат, значит Mobile - центрируем попап
    popup.style.position = "fixed";
    popup.style.left = "50%";
    popup.style.top = "50%";
    popup.style.transform = "translate(-50%, -50%)";
  }

  document.body.append(popup);
  setTimeout(() => {
    popup.classList.add("popup_active");
  }, 15);
};
