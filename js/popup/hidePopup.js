export const hidePopup = () => {
  const currentPopup = document.querySelector(".popup_active");

  if (currentPopup) {
    currentPopup.classList.remove("popup_active");
    setTimeout(() => {
      currentPopup.remove();
    }, 300);
  } else return;
};
