//Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок.
let numb1 = 27;
let numb2 = 27.8;
let numb3 = 41;
let numb4 = 5;

function roundNumb(numb) {
  let multipleOfFive = numb % 5;

  if (multipleOfFive === 0) {
    return numb;
  } else if (multipleOfFive >= 2.5) {
    return numb - multipleOfFive + 5;
  } else {
    if (multipleOfFive < 2.5) {
      return numb - multipleOfFive;
    }
  }
}
console.log(roundNumb(numb1));
console.log(roundNumb(numb2));
console.log(roundNumb(numb3));
console.log(roundNumb(numb4));

//Затрачено 8 минут
