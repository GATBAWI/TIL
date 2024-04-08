// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['hello', 'im', 'taeyong'];

// 재네릭 문법 (꺽새로 표현하는 방식)
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
	[1, 2, 3],
	[4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// tup1 = ['1', '2'];

let tup2: [number, string, boolean] = [1, '2', true];

// 내부적으로 배열로 받아들이기 때문에 에러가 발생하지 않는다 -> 주의해야함
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

// 튜플을 유용하게 사용하는 방법 -> 배열의 인덱스의 위치에 따라서 넣을 값이 정해져 있을때, 값을 잘못 넣는것을 방지할 수 있다.
const users: [string, number][] = [
	['김태용', 1],
	['김아무개', 2],
	['이아무개', 3],
	['박아무개', 4],
	// [5, '최아무개'],
];
