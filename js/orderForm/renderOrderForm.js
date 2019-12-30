//Рендер формы заказа

export const renderOrderForm = orderFormHTML => {
  const orderForm = document.createElement("div");

  orderForm.classList.add("js-orderForm");
  orderForm.classList.add("orderForm");
  orderForm.innerHTML = orderFormHTML;

  document.body.append(orderForm);
  setTimeout(() => {
    orderForm.classList.add("orderForm_active");
  }, 0);
};
