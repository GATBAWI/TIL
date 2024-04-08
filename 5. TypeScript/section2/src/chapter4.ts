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
let countryCodes = {
	Korea: 'ko',
	UnitedStates: 'us',
	UnitedKingdom: 'uk',
};
