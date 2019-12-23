export let renderProductCard = productData => {
  return `<div class="popup-container">
  <div class="popup-container__button-close">
    <button class="button-close-icon button-close">Закрыть</button>
  </div>
  <div class="product-card">
    <div class="product-card__image-container product-card__image-container_popup">
      <img
        class="product-card__image"
        src="images/${productData.image}"
        alt="${productData.name}"
      />
       ${
         productData.salePrice
           ? '<div class="product-card__sale">sale</div>'
           : ""
       }; 
    </div>

    <div class="product-card__name">${productData.name}</div>
    ${
      productData.salePrice
        ? `<div class="product-card__price"> <div class="product-card__old-price">${productData.price} ₽</div>${productData.salePrice}  ₽</div>`
        : `<div class="product-card__price">
    ${productData.price} ₽</div>`
    };

    <h4 class="product-card__description">
    ${productData.description}
    </h4>

</div>`;
};
/* 
<div class="product-card__sizes">
<input
  class="radio-button-size-item "
  type="radio"
  name="size"
  value="xs"
  id="xs-2"
></input>
<label class="radio-button-size-item__label" for="xs-2">
  xs
</label>

<input
  class="radio-button-size-item "
  type="radio"
  name="size"
  value="s"
  id="s-2"
></input>
<label class="radio-button-size-item__label" for="s-2">
  s
</label>

<input
  class="radio-button-size-item "
  type="radio"
  name="size"
  value="m"
  id="m-2"
></input>
<label class="radio-button-size-item__label" for="m-2">
  m
</label>

<input
  class="radio-button-size-item "
  type="radio"
  name="size"
  value="l"
  id="l-2"
></input>
<label class="radio-button-size-item__label" for="l-2">
  l
</label>

<input
  class="radio-button-size-item "
  type="radio"
  name="size"
  value="xl"
  id="xl-2"
></input>
<label class="radio-button-size-item__label" for="xl-2">
  xl
</label>

<input
  class="radio-button-size-item "
  type="radio"
  name="size"
  value="xxl"
  id="xxl-2"
></input>
<label class="radio-button-size-item__label" for="xxl-2">
  xxl
</label>
</div>
</div>
<input
class="button-submit product-card__button-submit"
type="submit"
value="Заказать"
></input> */
