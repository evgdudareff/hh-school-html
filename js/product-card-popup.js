import { productsData } from "./model";
import { renderProductCard } from "./render-product-card";

let showDataId = e => {
  let target = e.target;

  while (!target.classList.contains("product-card")) {
    target = target.parentNode;

    if (target.classList.contains("content-section")) {
      return;
    }
  }

  const productData = productsData.find(
    product => product.id === target.dataset.productId
  );

  console.log(productData);
  const productCardTemplate = renderProductCard(productData);
};

//Повесить обработчик клика по карточке товара
let productCards = document
  .querySelectorAll(".product-card")
  .forEach(productCard => {
    productCard.addEventListener("click", showDataId);
  });
