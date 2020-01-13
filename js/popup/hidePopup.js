export const hidePopup = () => {
  const currentPopup = document.querySelector(".popup_active");

  if (currentPopup) {
    currentPopup.classList.remove("popup_active");

    const mobileOuter = document.querySelector(".js-mobile-outer");
    if (mobileOuter) {
      mobileOuter.remove();
      document.body.style.overflow = "";
    }

    setTimeout(() => {
      currentPopup.remove();
    }, 300);
  } else return;
};
