/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age 살입니다.
function func(value: number | string | Date | null | Person) {
  // value;
  // value.toUpperCase();
  // value.toFixed();
  // typeof 연산자를 통해서 value의 타입을 축소!
  // 타입을 좁혀주는 조건문을 "타입 가드"라고 한다
  if (typeof value === "number") {
    // 특정 조건문 안에서 더 좁은 타입이 보장된다면, 이전에 사용하지 못하던 함수를 사용할 수 있다.
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    // null 값의 typeof 결과도 object 이기에, getTime을 하지 못해서 에러가 발생한다.
    // } else if (typeof value === "object") {
    // 왼쪽에 있는 값이 오른쪽의 instance 인지 물어보는 것
    // 왼쪽의 value가 오른쪽의 Date 객체인지 물어보는 것!
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살입니다.`);
  }
}
