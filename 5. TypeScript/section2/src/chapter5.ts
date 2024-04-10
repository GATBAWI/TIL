// enum 타입 (열거형 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum은 컴파일 결과 사라지지 않고 존재한다!

// enum에 숫자를 할당하는 방식을 숫자형 enmum이라고 함
enum Role {
	// ADMIN = 0,
	// USER = 1,
	// GUEST = 2,
	// ADMIN,  // 숫자를 직접 할당하지 않아도 위에서부터 0, 1, 2, ... 순서대로 할당됨
	// USER,
	// GUEST,
	ADMIN = 10, // 특정 번호부터 할당하고 싶을 때 사용하는 방법
	USER,
	GUEST,
}

enum Language {
	korean = 'ko',
	english = 'en',
}

const user1 = {
	name: '김태용',
	// role: 0, // 0 <- 관리자
	role: Role.ADMIN, // 0 <- 관리자
	language: Language.korean,
};
const user2 = {
	name: '홍길동',
	role: Role.USER, // <- 일반 유저
	language: Language.english,
};
const user3 = {
	name: '아무개',
	role: Role.GUEST, // <- 게스트
};

console.log(user1, user2, user3);
