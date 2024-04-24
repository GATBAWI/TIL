/**
 * 함수 오버로딩
 * JS에서는 불가능 -> TS 에서 지원하는 문법
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법!
 * -> 하나의 함수 func
 * -> Ver1. 매개변수 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수 3개 -> 이 매개변수들을 다 더한 값을 출력
 */

// 함수의 버전을 먼저 알려줘야한다. -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 함수의 실제 구현부를 만든다. -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// 오버로드 시그니처를 가지고 있으면 함수를 호출할때 인수들의 타입이 구현부에 정의된 매개변수의 갯수나 타입을 따르지 않고,
// 오버로드 시그니처 중 한가지 버전을 따라간다!
// func();
func(1);
// func(1, 2);
func(1, 2, 3);
