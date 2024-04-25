/**
 * 선언 합침
 */

// type Person = {
//   name: string;
// }

// type Person = {
//   age: number;
// }

// 타입 별칭의 경우 식별자가 겹치면 에러가 발생한다.
// 인터페이스는 선언 합침이 가능하다.

interface Person {
	name: string;
}
interface Person {
	// 인터페이스의 선언 합침에서 프로퍼티를 다른 타입으로 지정하지 못한다.
	// 동일한 프로퍼티를 사용하려면 동일한 타입을 사용해야 한다.
	// 같은 타입의 서브 타입도 사용할 수 없다. (name 이 string 인 경우 string literal 을 할 수 없다.)
	// name: number;
	name: string;
	age: number;
}

interface Developer extends Person {
	name: '김태용';
}

const person: Person = {
	name: '',
	age: 30,
};

/**
 * 모듈 보강
 */

interface Lib {
	a: number;
	b: number;
}

interface Lib {
	c: string;
}

const lib: Lib = {
	a: 1,
	b: 2,
	// c 를 추가하고 싶다면, 우리의 코드에서 interface Lib을 새로 보강한다.
	c: '김태용',
};
