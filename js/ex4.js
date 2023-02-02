//Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).
function isPrimes(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(isPrimes(3));
console.log(isPrimes(4));
console.log(isPrimes(5));
console.log(isPrimes(6));
console.log(isPrimes(7));

//затрачено 15 минут
