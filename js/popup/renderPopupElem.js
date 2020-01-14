import { touchHandler } from "../common/touchHandler";

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
    let mobileOuter = document.createElement("div");
    mobileOuter.classList.add("js-mobile-outer");
    mobileOuter.style.top = window.pageYOffset + "px";
    mobileOuter.append(popup);
    document.body.append(mobileOuter);

    //получить высоту и ширину окна
    const windowHeight = document.documentElement.clientHeight;
    const windowWidth = document.documentElement.clientWidth;

    popup.style.left = (windowWidth - popup.offsetWidth) / 2 + "px";
    popup.style.top = (windowHeight - popup.offsetHeight) / 2 + "px";
    popup.size = "mobile";

    document.body.style.overflow = "hidden";
    //для ios необходимо превентить события скролла (для попапа на mobile)
    document.addEventListener("touchmove", touchHandler, { passive: false });
  }

  return popup;
};
