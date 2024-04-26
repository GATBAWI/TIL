/**
 * 제네릭
 */

// 제네릭 함수
// 함수의 타입에 따라서 가변적으로 사용할 수 있는 함수
// 일반적인? 포괄적인 함수 -> 종합병원은 general hospital -> 두루두루 모든 병을 치료 ->
// 제네릭 함수? -> 모든 타입에 두루두루 사용 가능한 함수
// 꺽새 안의 T는 타입을 저장하는 변수! -> 자바스크립트의 변수처럼 상황에 따라 다른 타입이 담긴다.
// 그렇다면 언제 타입이 담기는가 ? -> 함수가 호출 될 때 !
function func<T>(value: T): T {
  return value;
}

// 여러가지 인수를 쓰고 싶은 상황이라면, value의 타입을 any로 지정할 수도 있다.
// value에 따라서 return의 타입을 지정해 줄 수는 없을까? -> any?, unknown? -> 제네릭!
// func(10);
// func(true);

let num = func(10);

let bool = func(true);

let str = func("string");

// let arr = func([1, 2, 3] as [number, number, number]);
// number[] 에서 튜플 타입으로 변경하는 법!
let arr = func<[number, number, number]>([1, 2, 3]);
