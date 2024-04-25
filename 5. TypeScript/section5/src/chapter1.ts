/**
 * 인터페이스의 확장
 */

import { LargeNumberLike } from 'crypto';

interface Animal {
	name: string;
	color: string;
}

// type Animal = Animal {
// 	name: string;
// 	color: string;
// }

// 타입 별칭이여도 별칭이 객체라면 인터페이스를 확장할 수 있다.

// extends : 확장(상속)

interface Dog extends Animal {
	// 만약 name을 literal type으로 지정하고 싶다면, 상속받는 Animal 타입의 서브 타입이이여 한다.
	isBark: boolean;
}

const dog: Dog = {
	name: '',
	color: '',
	isBark: true,
};

interface Cat extends Animal {
	isScrat: boolean;
}

interface Chicken extends Animal {
	isFly: boolean;
}

// 중복된 프로퍼티가 너무 많다!
// 중복되는 프로퍼티중 하나만 바꾸라고 한다면 여러번 바꿔야 한다!

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
	name: '',
	color: '',
	isBark: true,
	isScrat: true,
};
