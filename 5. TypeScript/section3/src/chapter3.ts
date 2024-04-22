/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // num2가 number 타입으로 업캐스팅되어 대입 가능

/**
 * 객체 타입간의 화환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가 ?
 * -> 객체 타입들은 프로퍼티를 기준으로 포함관계를 설명할 수 있다.
 */

type Animal = {
	name: string;
	color: string;
};

type Dog = {
	name: string;
	color: string;
	breed: string;
};

let animal: Animal = {
	name: '기린',
	color: 'yellow',
};

let dog: Dog = {
	name: '꼬미',
	color: 'white',
	breed: '포메라니안',
};

animal = dog; // dog가 Animal 타입으로 업캐스팅되어 대입 가능
// dog = animal; // animal이 Dog 타입으로 다운캐스팅되어 대입 불가능

type Book = {
	name: string;
	price: number;
};

type ProgrammingBook = {
	name: string;
	price: number;
	skill: string;
};

let book: Book;

let programmingBook: ProgrammingBook = {
	name: '한 입 크기로 잘라먹는 리액트',
	price: 33000,
	skill: 'reactjs',
};

book = programmingBook; // programmingBook이 Book 타입으로 업캐스팅되어 대입 가능
// programmingBook = book; // book이 ProgrammingBook 타입으로 다운캐스팅되어 대입 가능

/**
 * 초과 프로퍼티 검사
 * 실제 타입에 정의하지 않은 프로퍼티를 설정하면 오류 발생
 */

let book2: Book = {
	name: '한 입 크기로 잘라먹는 리액트',
	price: 33000,
	// skill: 'reactjs',
};

let book3: Book = programmingBook;

function func(book: Book) {
	func({
		name: '한 입 크기로 잘라먹는 리액트',
		price: 33000,
		// skill : 'reactjs',
	});
}

// 함수의 인수로 객체를 전달할때도 초과 프로퍼티 검사가 이루어지므로, 변수에 저장해 두었다가 인수로 사용해야 한다.
func(programmingBook);
