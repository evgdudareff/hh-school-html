//Обработать radio-buttons на форме заказа
export const radioOrderForm = () => {
  const radioBtns = document.querySelectorAll('input[name="deliveryMethod"]');
  radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("click", () => {
      if (radioBtn.checked) {
        //скрыть секцию адрес доставки
        const deliveryAddressSection = document.querySelector(
          ".form__delivery-address"
        );
        deliveryAddressSection.classList.toggle("form__delivery-address_hide");
      }
    });
  });
};
