/**
 * Unknown Type -> 전체 집합
 */

function unknownExam() {
	/* 업케스팅은 문제없이 진행된다. */
	let a: unknown = 1;
	let b: unknown = 'hello';
	let c: unknown = true;
	let d: unknown = null;
	let e: unknown = undefined;

	let unknownVar: unknown;

	/* 다운캐스팅은 불가능 */
	// let num: number = unknownVar;
	// let str: string = unknownVar;
	// let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */

function neverExam() {
	function neverFunc(): never {
		while (true) {}
	}

	// 업캐스팅 가능
	let num: number = neverFunc();
	let str: string = neverFunc();
	let bool: boolean = neverFunc();

	// 다운캐스팅
	// let never1: never = 10;
	// let never2: never = "string";
	// let never3: never = true;
}

/**
 * void 타입
 */

function voidExam() {
	function voidFunc(): void {
		console.log('Hi. TAEYONG!');
		return undefined;
	}

	let voidVar: void = undefined;
}

/**
 * any 타입 (치트키타입 -> 모든 타입의 슈퍼타입도 되고 서브타입도 된다. 단, never 제외)
 */

function anyExam() {
	let unkownVar: unknown;
	let anyVar: any;
	let undefinedVar: undefined;
	let neverVar: never;

	anyVar = unkownVar;

	undefinedVar = anyVar;

	// neverVar = anyVar;
}
