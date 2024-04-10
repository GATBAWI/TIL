// any
// 특정 변수의 타입을 우리가 확실히 모를때 사용

// 타입스크립트는 타입을 직접 지정하지 않아도, 초기화한 값으로 타입이 지정된다.
// 그래서 string을 값으로 넣게 되면 에러가 발생한다.
let anyVar: any = 10;
// any -> 어떤 타입이던지 넣을 수 있다.
anyVar = 'string';
anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// any 타입은 타입스크립트의 이점을 다 포기하기 때문에 런타임에 에러가 발생한다.
// any 타입은 최대한 사용하지 않는 것이 좋다.

// unkonwn
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // unknown 타입은 다른 타입에 할당할 수 없다.

// unknown 타입을 사용하고 싶다면, 타입을 정제해서만 사용할 수 있다.
if (typeof unknownVar === 'number') {
	num = unknownVar;
}
