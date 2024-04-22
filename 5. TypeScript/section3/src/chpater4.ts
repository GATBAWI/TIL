/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean | undefined | null;

a = 1;
a = 'Hello';

a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
	name: string;
	color: string;
};

type Person = {
	name: string;
	language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
	name: '',
	color: '',
};

let union2: Union1 = {
	name: '',
	language: '',
};

let union3: Union1 = {
	name: '',
	color: '',
	language: '',
};

// let union4: Union1 = {
//   /**
//    * Dog 타입과 Person 타입의 교집합을 상징하는 것이 Union1 이다.
//    */
//   name: "",
// }

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string;
// 교집합 타입은 & 연산자를 이용해서 타입을 표현한다 -> number & string = never

type Intersection1 = Dog & Person;

let Intersection1: Intersection1 = {
	// 교집합 타입은 모든 타입의 프로퍼티가 있어야 한다.
	name: '',
	color: '',
	language: '',
};
