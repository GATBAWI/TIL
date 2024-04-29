/**
 * 분산적인 조건부 타입
 * -> 조건부 타입을 유니온과 함께 사용할 때 조건부 타입이 분산적으로 동작하게 업그레이드 되는 문법!
 */

// type StringNumberSwitch<T> = T extends string ? string : number;

// 분산을 방지하는 방법
type StringNumberSwitch<T> = [T] extends [string] ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 조건부 타입의 동작 방식이 변경된다 -> 한번은 number 타입, 한번은 string 으로 T가 동작하고 동작결과가 union 된다.
let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> | StringNumberSwitch<string>;

let d: StringNumberSwitch<number | string | boolean>;
// 1단계
// StringNumberSwitch<number>
// StringNumberSwitch<string>
// StringNumberSwitch<boolean>;

// 2단계
// StringNumberSwitch<number> | StringNumberSwitch<string> | StringNumberSwitch<boolean>;
// number | string | number;

// 결과
// number | string

/**
 * 실용적인 예제
 */

// 타입 변수 T가 타입변수 U의 서브타입이라면 never, 아니라면 T를 반환하는 타입
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1 단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>;

// 2 단계
// number | never | boolean;

// 결과 -> 공집합과 다른 집합을 유니온하는 것은 그대로 유지된다.
// number | boolean;
// 결과적으로는 string 타입을 제외한 number, boolean 타입만 남게 된다.

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1 단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>;

// 2 단계
// never | string | never;

// 3 단계
// string;
