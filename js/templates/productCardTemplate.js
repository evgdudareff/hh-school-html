//Шаблон карточки продукта, основанный на интерполяции строк
//параметр formStyle генерирует дополнительную разметку для использования в шаблоне формы

export const productCardTemplate = (productData, formStyle = false) => {
  const productCardMainTemplate = `<div class="product-card">
    ${
      formStyle
        ? `<div class="product-card__image-container product-card__image-container_form">\n`
        : `<div class="product-card__image-container">\n`
    } 
        
        <img
          class="product-card__image"
          src="/${productData.image}"
          alt="${productData.name}"/>
         
          ${
            productData.salePrice
              ? '<div class="product-card__sale">sale</div>'
              : ""
          };
      </div>
  
      <div class="product-card__name">${productData.name}</div>
  
      ${
        productData.salePrice
          ? `<div class="product-card__price"> <div class="product-card__old-price">${productData.price} ₽</div>${productData.salePrice}  ₽</div>\n`
          : `<div class="product-card__price"> ${productData.price} ₽</div>\n`
      } 
  
      <h4 class="product-card__description">${productData.description}</h4>\n`;

  let submitButtonTemplate = "";
  if (formStyle == false) {
    submitButtonTemplate = `${
      productData.sizes
        ? `<input class="button-submit product-card__button-submit button-submit_disabled" type="submit" value="Заказать" disabled></input>\n`
        : `<input class="button-submit product-card__button-submit" type="submit" value="Заказать"></input>\n`
    }`;
  }

  if (!productData.sizes) {
    //если товар безразмерный, то возвращаем шаблон
    return productCardMainTemplate + "</div>\n" + submitButtonTemplate;
  } else {
    //иначе дополнительно генерируем для каждого размера блоки input-label с учётом доступности размера
    let productCardSizesTemplate = '<div class="product-card__sizes">\n';

    for (let size in productData.sizes) {
      let labelPart = "";
      let inputPart = "";

      if (productData.sizes[size] == false) {
        labelPart = `<label class="radio-button-size-item__label label_disabled" for="${size}">${size}</label>\n`;
        inputPart = `<input class="radio-button-size-item" type="radio" name="size" value="${size}" id="${size} disabled"></input>\n`;
      } else {
        labelPart = `<label class="radio-button-size-item__label" for="${size}">${size}</label>\n`;
        inputPart = `<input class="radio-button-size-item" type="radio" name="size" value="${size}" id="${size}"></input>\n`;
      }

      //При вызове формы присутствует выбранный ранее размер, его нужно установить
      if (formStyle && productData.checkedSize == size) {
        inputPart = inputPart.replace("<input ", "<input checked ");
      }

      productCardSizesTemplate += inputPart + labelPart;
    }

    return (
      productCardMainTemplate +
      productCardSizesTemplate +
      "</div>\n" +
      "</div>\n" +
      submitButtonTemplate
    );
  }
};
