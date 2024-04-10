// 타입 별칭

type User = {
	id: number;
	name: string;
	nickname: string;
	birth: string;
	bio: string;
	location: string;
};

// 타입 별칭은 동일한 스코프에 중복으로 선언할 수 없다.

function func() {
	// 스코프가 다르기 때문에 다른 타입이 적용된다.
	type User = {};
}

// let user: {
// 	id: number;
// 	name: string;
// 	nickname: string;
// 	birth: string;
// 	bio: string;
// 	location: string;
// } = {
// 	id: 1,
// 	name: '김태용',
// 	nickname: 'GATBAWI',
// 	birth: '1994.04.30',
// 	bio: '안녕하세요. 개발자 김태용입니다.',
// 	location: '경산시',
// };

let user: User = {
	id: 1,
	name: '김태용',
	nickname: 'GATBAWI',
	birth: '1994.04.30',
	bio: '안녕하세요. 개발자 김태용입니다.',
	location: '경산시',
};

let user2: User = {
	id: 2,
	name: '김아무개',
	nickname: 'GATBAWI',
	birth: '1994.04.30',
	bio: '안녕하세요. 개발자 김태용입니다.',
	location: '경산시',
};

// 인덱스 시그니처
type CountryCodes = {
	// Korea: string,
	// UnitedStates: string,
	// UnitedKingdom: string,
	[key: string]: string;
};
let countryCodes: CountryCodes = {
	// 키는 전부 스트링 타입, 밸류도 전부 스트링타입이다!
	Korea: 'ko',
	UnitedStates: 'us',
	UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
	// 인덱스 시그니처 타입은 규칙을 위반하지 않으면 모든 객체를 허용한다.
	// 빈 객체에 인덱스 시그니처 타입을 지정해도 위반하는것이 없기 때문에 에러가 나지 않는다.
	[key: string]: number;
	// 반드시 있어야 하는 것은 추가적으로 넣어주면 된다.
	Korea: number;
};
let countryNumberCodes: CountryNumberCodes = {
	Korea: 410,
	UnitedState: 840,
	UnitedKingdom: 826,
};
