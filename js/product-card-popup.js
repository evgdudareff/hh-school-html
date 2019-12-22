//Повесить обработчик клика по карточке товара
let productCards = document
  .querySelectorAll(".product-card")
  .forEach(productCard => {
    addEventListener("onclick", () => {
      console.log(`${productCard.dataset.goods - id}`);
    });
  });
