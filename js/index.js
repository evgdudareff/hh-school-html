import "./dev/grid";
import "./slider/slider";
import "./popup/popup";
/* 
//функция загузки произвольных данных товаров в JSON с произвольного сервера
let loadData = async function(url) {
  try {
    //загружаем данные
    const response = await fetch(url);

    let parsedData = await response.json();

    //Регионы parsedData.areas

    return parsedData;
  } catch (err) {
    alert("Ooops! Something went wrong while loading the data...");
  }
};

//Загрузить данные в формате JSON и вывести в bootstrap сетку на front
loadData("https://api.hh.ru/areas/113").then(parsedData => {
  //рендерим список полученных объектов-карточек
  console.log(parsedData);
}); */
