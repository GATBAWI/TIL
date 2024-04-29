/**
 * 조건부 타입 (삼항연산자 사용!)
 */

// 삼항연산자를 이용해서 조건에 따라 타입을 결정하는 방법
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// ObjB가 ObjA를 상속한다면, B는 number 타입이고 아니라면 string 타입이 된다.
type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any) {
  if (typeof text === "string") {
    // 함수 내부에서는 조건부 타입의 결과가 어떻게 될 지 알수없다.
    // 함수가 호출되기 전까지 T도 unknown 타입이다.
    // 어쩔수 없이 return 에 타입 단언이 필요하다! -> 해결책은 오버르드 시그니처
    // return text.replaceAll(" ", "") as any;
    return text.replaceAll(" ", "");
  } else {
    // return undefined as any;
    return undefined;
  }
}

let resultA = removeSpaces("Hello World, TypeScript!, I'm a developer!");
resultA.toUpperCase();

let resultB = removeSpaces(undefined);
