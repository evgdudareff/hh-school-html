//Шаблон формы заказа продукта, основанный на интерполяции строк

import { productCardTemplate } from "./productCardTemplate";

export const orderFormTemplate = productData => {
  const formPartOneHTML = `<form class="form">
      <div class="columns-wrapper">
        <div class="form__button-close">
          <button class="button-close-icon">
            Закрыть
          </button>
        </div>
        <div class="columns-row">
          <div class="column column_s-2 column_m-3 column_l-7">
            
            <div class="form__section">
              <div class="form__input-main-contacts">
                <h1 class="heading heading_level-1">Оформление заказа</h1>
                <h4 class="heading heading_level-4">Контактное лицо</h4>
                <div class="form__input-text">
                  <input class="input-text js-input-required" type="text" name="fullName" placeholder="ФИО" value></input>
                </div>
                <div class="form__input-text">
                  <input class="input-text js-input-required" type="text" name="email" placeholder="Электронная почта" value></input>
                </div>
              </div> 
           
              <div class="form__input-tel">
                <input class="input-tel input-tel_country-code" type="text" name="countryCode" value="+7"
                  readonly></input>
                <input class="input-tel input-tel_operator-code js-input-required" type="text" name="operatorCode" placeholder="Код"></input>
                <input class="input-tel input-tel_number js-input-required" type="text" name="telNumber" placeholder="Номер"></input>
              </div>
            </div>

            <div class="form__section">  
              <h4 class="heading heading_level-4">Способ получения заказа</h4>
              <div class="form__delivery-method">

                <div class="form__radio-button">
                  <input class="radio-button-sqared radio-button-sqared__button" type="radio" name="deliveryMethod"
                  value="selfPickup" id="selfPickup"></input> 
                  <label class="radio-button-sqared__label" for="selfPickup">Самовывоз</label>
                </div>
                
                <div class="form__radio-button">
                  <input class="radio-button-sqared radio-button-sqared__button" type="radio" name="deliveryMethod"
                  value="deliviryPickup" id="deliveryPickup" checked></input>
                  <label class="radio-button-sqared__label" for="deliveryPickup">Доставка</label>
                </div>
              
              </div>
            </div>

            <div class="form__section">
              <div class="form__delivery-address">
                <h4 class="heading heading_level-4">Адрес</h4>
                <div class="select">
                  <input class="input-select" name="cityLocataion" placeholder="Город" inputmode="none">
                  </input>
                </div>
                <div class="form__textarea">
                  <textarea type="textarea" class="textarea" placeholder="Адрес"
                  name="addressExpaned"></textarea>
                </div>
              </div>
            </div>
            
            <div class="form__section">
              <div class="form__payment-methods">
                <h4 class="heading heading_level-4">Оплата</h4>

                <div class="form__payment-method">
                  <input class="radio-button-circle" type="radio" name="paymentMethod" value="paymentOnline"
                    id="paymentOnline" checked></input>
                  <label class="radio-button-сircle__label" for="paymentOnline">Онлайн-оплата</label>
                </div>
    
                <div class="form__payment-method">
                  <input class="radio-button-circle" type="radio" name="paymentMethod" value="paymentCash"
                    id="paymentCash"></input>
                  <label class="radio-button-сircle__label" for="paymentCash">Наличными</label>
                </div>
    
                <div class="form__payment-method">
                  <input class="radio-button-circle" type="radio" name="paymentMethod" value="paymentCard"
                    id="paymentCard"></input>
                  <label class="radio-button-сircle__label" for="paymentCard">Картой при получении</label>
                </div>
    
              </div>
            </div>
            
            <div class="form__section">
              <div class="form__notification">
                <h4 class="heading heading_level-4">Уведомления</h4>

                <div class="checkbox">
                  <input class="checkbox__box" type="checkbox" name="smsNotification" value id="smsNotification"></input>
                  <label class="label" for="smsNotification">Хочу получать SMS уведомления</label>
                </div>

              </div>
            </div>

            <input class="button-submit form__button-submit" type="submit" value="Оформить заказ"></input>
            
          </div>`;

  const formPartTwoHTML = `<div class="column column_s-2 column_m-3 column_l-5">
              <div class="form__product-card">`;

  const productCardHTML = productCardTemplate(productData, true);

  const formPartThreeHTML = `</div>
           </div>         
        </div>
    </form> `;

  return (
    formPartOneHTML + formPartTwoHTML + productCardHTML + formPartThreeHTML
  );
};
