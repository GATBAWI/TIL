/**
 * map 메서드
 */

const arr = [1, 2, 3];

// map 함수는 콜백함수를 수행해서 새로운 배열을 반환한다.
const newArr = arr.map((item) => item * 2); // [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (item) => item * 2);
map(["Hi", "Hello"], (item) => item.toUpperCase());
map(["Hi", "Hello"], (item) => parseInt(item));

/**
 * forEach 메서드
 */

const arr2 = [1, 2, 3];

arr2.forEach((item) => console.log(item));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (item) => {
  console.log(item.toFixed());
});

forEach(["123", "456"], (item) => item);
