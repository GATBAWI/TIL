// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
	return 'hello!';
}

function func2(): void {
	// function func2(): undefined {
	// function func2(): null {
	// 함수의 반환값이 undefined일 경우 진짜 undefined를 반환하게 해야 한다. -> return;
	// 함수의 반환값이 null 일 경우 진짜 null을 반환하게 해야 한다. -> return null;
	console.log('hello!');
}

// // void 타입은 아무것도 담을 수 없다! 오직 undefined만 담을 수 있다.
// let a: void;
// a = 1;
// a = 'hello';
// a = {};
// a = undefined;
// a = null;

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
	// 함수가 종료되고 반환 값이 없을때에는 void를 사용하는 것이 맞지만,
	// 반환을 할 수 없는 함수라면 voide가 아닌 never를 사용해야 한다.
	// 반환값 자체가 존재 할 수 없는 상황이라면 never
	while (true) {}
}

function func4(): never {
	// func4함수가 실행되면 프로그램이 중지되고 바로 에러를 던저주기 때문에 반환값 타입으로는 error가 맞다.
	throw new Error('error');
}

// let anyVar: any;
// let a: never;
// // never 타입의 변수에는 어떤 값도 할당할 수 없다.
// stricNullChecks가 false여도 never 타입에는 null을 할당할 수 없다.
// a = 1;
// a = 'hello';
// a = {};
// a = undefined;
// a = null;
// a = anyVar;
