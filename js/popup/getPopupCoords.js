import { getCoords } from "../common/getCoords";

//Получает на вход опорный элемент, относительно которого нужно считать координаты попапа
export const getPopupCoords = pivotElement => {
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

  //Если попап для Mobile, то вычислять координты не нужно
  if (screenWidth < screenGreaterS) {
    return null;
  }
  //Иначе рассчитать

  //Получить опорные координаты опорного элемента для размещения попапа {left, top}
  let pivotCoords = getCoords(pivotElement);

  //Tablet
  if (screenWidth >= screenGreaterS && screenWidth < screenGreaterM) {
    shiftLeft = popupBorderWidth + popupPaddingLeftTablet;
    shiftTop = popupBorderWidth + popupPaddingTopTablet;
  }

  //Desktop
  if (screenWidth >= screenGreaterM) {
    shiftLeft = popupBorderWidth + popupPaddingLeftDesktop;
    shiftTop = popupBorderWidth + popupPaddingTopDesktop;
  }

  let popupCoords = {};
  popupCoords.left = pivotCoords.left - shiftLeft;
  popupCoords.top = pivotCoords.top - shiftTop;

  return popupCoords;
};
