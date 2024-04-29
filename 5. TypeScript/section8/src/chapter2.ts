/**
 * Keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

// person 변수의 프로퍼티 타입을 추론해서 Person 타입으로 정의한다.
type Person = typeof person;

// function getPropertyKey(person: Person, key: "name" | "age") {
// keyof 연산자를 사용하면 Person의 프로퍼티 키값을 유니온해서 추출할 수 있다.
// keyof 연산자는 반드시 뒤에 타입이 와야한다.
// function getPropertyKey(person: Person, key: keyof Person) {
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

// const person: Person = {
//   name: "김태용",
//   age: 30,
// };

const person = {
  name: "김태용",
  age: 30,
};

getPropertyKey(person, "name"); // 김태용

//  - - - - - - -
typeof person === "object";

// 타입을 정의할때 typeof 연산자를 사용하면 동작이 변경된다.
