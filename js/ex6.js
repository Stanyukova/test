//Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит таблицу умножения. В консоли должна появиться таблица. 
function table (input) {
let output = '';
for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= input; j++) {
    output += ' ' + i * j;
    if (i * j < 10) {
      output += ' ';
    }
  }
  console.log(output);
  output = '';
}
}
table (5)
//затрачено 7 минут