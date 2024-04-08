// object 타입
// object 타입은 "객체다" 라는 뜻 외에 아무것도 없다.
// let user: object = {
// 객체 리터럴 타입으로 각 프로퍼티의 타입을 정희해줘야 에러가 나지 않는다.
let user: { id?: number /* 선택적 프로퍼티  */; name: string } = {
	id: 1,
	name: '김태용',
};

// 객체의 구조를 기준으로 타입을 지정하게 된다 -> 구조적 타입 시스텝 -> property based type system
// C언어나 자바에서는 선언과 함께 타입을 작성 -> 명목적 타입 시스템
let dog: { name: string; color: string } = {
	name: '돌돌이',
	color: 'brown',
};

user = {
	id: 1,
	name: '홍길동',
};

let config: {
	// apiKey 는 바뀌면 안되는 값이다!
	// 수정되면 안되는 값이라면 읽기 전용으로 readonly를 사용한다.
	readonly apiKey: string;
} = {
	apiKey: 'MY API KEY',
};

// config.apiKey = 'hacked';
