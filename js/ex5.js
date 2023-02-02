//Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом). На вход подаются два массива. На выходе массив с необходимыми совпадениями.

const input1 = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const input2 = [56, 17, 17, 23, 34, 23, 1, 8, 1];

function intersect(nums1, nums2) {
  const duplicates1 = nums1.filter((number, index, numbers) => {
    return numbers.indexOf(number) !== index;
  });
  const duplicates2 = nums2.filter((number, index, numbers) => {
    return numbers.indexOf(number) !== index;
  });

  let result = [];
  let map = duplicates1.reduce((acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});
  for (let i = 0; i < duplicates2.length; i++) {
    const current = duplicates2[i];
    let count = map[current];
    if (count && count > 0) {
      result.push(current);
      map[current] -= 1;
    }
  }
  return result;
}

console.log(intersect(input1, input2));
//затрачено 42 минуты