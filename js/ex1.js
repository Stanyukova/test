//Написать метод/функцию, который/которая на вход принимает массив городов. В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка.

let arr = ["Москва", "Санкт-Петербург", "Воронеж"];
function stringOfCities(cities) {
  if (Array.isArray(cities)) {
    let res = cities.join(", ") + ".";
    return res;
  }
  return "Error";
}
console.log(stringOfCities(arr));

//Затрачено 5 минут
