export const getPopupShifts = () => {
  //Common
  const popupBorderWidth = 1;
  const screenGreaterS = 768;
  const screenGreaterM = 1000;

  //Tablet
  const popupPaddingLeftTablet = 15;
  const popupPaddingTopTablet = 20;

  //Desktop
  const popupPaddingLeftDesktop = 20;
  const popupPaddingTopDesktop = 20;

  let shiftLeft = 0;
  let shiftTop = 0;

  //получить текущие размеры окна
  const screenWidth = document.documentElement.clientWidth;

  //Рассчитать смещение

  //Tablet
  if (screenWidth >= screenGreaterS && screenWidth < screenGreaterM) {
    shiftLeft = popupBorderWidth + popupPaddingLeftTablet;
    shiftTop = popupBorderWidth + popupPaddingTopTablet;
    return { shiftLeft, shiftTop };
  }

  //Desktop
  if (screenWidth >= screenGreaterM) {
    shiftLeft = popupBorderWidth + popupPaddingLeftDesktop;
    shiftTop = popupBorderWidth + popupPaddingTopDesktop;
    return { shiftLeft, shiftTop };
  }
};
