/**
 * infer : 조건부 타입 내에서 특정 타입만 추론할 수 있는 기능
 */

type FuncA = () => string;

type FuncB = () => number;

// 타입변수 T가 함수 타입의 서브 타입이라면 반환은 스트링으로 하고, 아니면 never로 진행!
// type ReturnType<T> = T extends () => string ? string : never;
// infer 를 사용하게 되면 조건식을 참으로 만들게 되는 '타입'을 추론한다. 해당 타입이 참이 되기 위해서는 R 은 string
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // never

type C = ReturnType<number>; // never -> type R을 추론할 수 없는 상황!

/**
 * 예제
 */

// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
type PromiseA = PromiseUnpack<Promise<number>>; // number
type PromiseB = PromiseUnpack<Promise<string>>; // string
