//Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».
function computers(int) {
  int = String(int);
  if (int[int.length - 2] == 1) {
    console.log(int + " компьютеров");
  } else if (int[int.length - 1] == 1) {
    console.log(int + " компьютер");
  } else if (
    int[int.length - 1] == 2 ||
    int[int.length - 1] == 3 ||
    int[int.length - 1] == 4
  ) {
    console.log(int + " компьютера");
  } else {
    console.log(int + " компьютеров");
  }
}
console.log(computers(12));
console.log(computers(55));
console.log(computers(1041));
console.log(computers(44));
// затрачено 30 минут