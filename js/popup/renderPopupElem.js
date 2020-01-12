//Рендерит и возвращает элемент попапа согласно данным о продукте

export const renderPopupElem = (popupHTML, coords, insertTarget) => {
  const popup = document.createElement("div");

  popup.classList.add("js-popup");
  popup.classList.add("popup");
  popup.innerHTML = popupHTML;

  //Если есть coords, значит Tablet/Desktop
  if (coords) {
    insertTarget.append(popup);
    popup.style.left = coords.left + "px";
    popup.style.top = coords.top + "px";
    popup.size = "tablet-desktop";
  } else {
    //Иначе Mobile
    document.body.append(popup);
    //получить высоту и ширину окна
    const windowHeight = document.documentElement.clientHeight;
    const windowWidth = document.documentElement.clientWidth;

    popup.style.left = (windowWidth - popup.offsetWidth) / 2 + "px";
    popup.style.top =
      (windowHeight - popup.offsetHeight) / 2 + window.pageYOffset + "px";
    popup.size = "mobile";
  }

  return popup;
};
