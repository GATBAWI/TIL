/**
 * 제네릭 타입 변수를 잘 활용 하는 방법
 */

/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 */

// 언노운 타입의 값에는 배열 메서드를 쓸 수 없다 -> 함수 호출 시에 T가 결정되기 때문에, 호출되기 전에는 unkonwn 타입이다.
// function returnFirstValue<T>(data: T[]) {
// 유니온 타입이 아닌 첫번째 요소만을 지정하고 싶다면 튜플로 지정해야 한다.
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([1, 2, 3]);
// 0

// 첫번째 요소에서 stirng 타입 말고 number 타임이 오면 number | string 유니온 타입이 지정된다.
// 딱 지정하고 싶으면, 튜플로 지정해야한다.
let str = returnFirstValue([1, "Hello", "My Name is"]);
// Hello

/**
 * 세번째 사례
 */

// T는 length 속성을 가지고 있어야 한다.
// T 는 확장하는 타입! 단, number 타입의 length 속성을 가지고 있는 타입으로 확장!
// T 라는 타입은 이제 무조건 length를 가지고 있어야 한다.
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("Hello World"); // 11

let var3 = getLength({ length: 100 }); // 100

// any 타입으로 지정하면, length 속성이 없는 값도 들어 올 수 있다. -> 원래는 에러가 발생해야 정상!
// extends 키워드를 통해서 제한!
// let var4 = getLength(100);
