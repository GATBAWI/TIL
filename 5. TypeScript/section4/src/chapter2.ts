/**
 * 함수 타입 호환성
 * 특정 함수 타임을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
 * 1. 반환 값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
 * 이 두가지 기준을 만족해야 "호환된다"라고 할 수 있다.
 */

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number type
let b: B = () => 10; // number literal type

a = b;
// b = a; // number type을 number literal type에 다운캐스팅 할 수 없다.

// 기준 2. 매개변수가 호환되는가
// 2 - 1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 매개변수의 타입을 기준으로 판단할 때 upcasting일 경우 에러가 발생한다.
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// 2 - 2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

// 매개변수의 갯수가 다를 때에는 할당하는 쪽의 매개변수의 갯수가 더 작아야 한다.
// 물론, 타입의 호환성도 신경써야한다!
func1 = func2;
// func2 = func1;
