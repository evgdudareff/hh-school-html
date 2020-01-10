import { getCoords } from "../common/getCoords";

//Рассчитывает координаты попапа
export const getPopupCoords = () => {
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

  //получить текущее разрешение экрана
  const screenWidth = window.innerWidth;

  //Если попап для Mobile, то координаты не возвращаем
  if (screenWidth < screenGreaterS) {
    return null;
  }

  //Tablet
  if (screenWidth >= screenGreaterS && screenWidth < screenGreaterM) {
    shiftLeft = -(popupBorderWidth + popupPaddingLeftTablet);
    shiftTop = -(popupBorderWidth + popupPaddingTopTablet);
  }

  //Desktop
  if (screenWidth >= screenGreaterM) {
    shiftLeft = -(popupBorderWidth + popupPaddingLeftDesktop);
    shiftTop = -(popupBorderWidth + popupPaddingTopDesktop);
  }

  let popupCoords = {};
  popupCoords.left = shiftLeft;
  popupCoords.top = shiftTop;

  return popupCoords;
};
