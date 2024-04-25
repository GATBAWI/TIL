/**
 * 인터페이스 -> 객체 타입 지정에 특화됨!
 */

interface IPerson {
	readonly name: string;
	age?: number;
	// 오버로드 시그니처는 식별자 중복으로 인해 오류가 발생한다.
	// 호출 시그니처를 이용해 한 식별자를 가지는 함수의 여러가지 인자 타입을 지정해 줄 수 있다.
	// sayHi: () => void;
	// sayHi: (a: number, b: number) => void;
	// 메서드 오버로딩을 구현하기 위해서는 "호출 시그니처를 사용해야 한다."
	sayHi(): void;
	sayHi(a: number, b: number): void;
}

// 인터페이스 함수는 유니온이나 인터섹션을 사용할 수 없다.
// 아래와 같이 타입 별칭으로 지정을 해서 사용하거나, 변수의 타입을 지정할 때 사용해야한다.
type Type1 = number | string | IPerson;
type Type2 = number & string & IPerson;

// type Func = {
// 	(): void;
// };

const person: IPerson = {
	name: '김태용',
	age: 30,
	sayHi: function () {
		console.log(`${person.name}님 안녕하세요!`);
	},
};

person.sayHi();
person.sayHi(1, 2);
