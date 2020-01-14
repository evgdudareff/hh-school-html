import { touchHandler } from "../common/touchHandler";

export const hidePopup = () => {
  const currentPopup = document.querySelector(".popup_active");

  if (currentPopup) {
    currentPopup.classList.remove("popup_active");

    const mobileOuter = document.querySelector(".js-mobile-outer");
    if (mobileOuter) {
      mobileOuter.remove();
      document.body.style.overflow = "";
      //для ios необходимо превентить события скролла (для попапа на mobile)
      document.removeEventListener("touchmove", touchHandler);
    }

    setTimeout(() => {
      currentPopup.remove();
    }, 300);
  } else return;
};
