/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

// let person: Person = {}; // 객체 내부
// let person = {}; 빈 객체로 초기화되기 때문에 프로퍼티를 줄 수 없다.
// 초기화 될 값의 타입을 단언해주면 된다. -> 타입 단언 시 효과 : 컴파일러에게 앞의 타입을 뒤에 선언된 타입으로 간주해 달라고 하는 것!
let person = {} as Person;
person.name = "김태용";
person.age = 30;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "꼬미",
  color: "white;",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈파타입이거
 * A가 B의 서브타입이어야 한다.
 */

let num1 = 10 as never; // 10은 Number 타입이고, Never은 Number 타입의 슈퍼 타입이기 때문에 가능
let num2 = 10 as unknown; // 10은 Number 타입이고, Unknown은 모든 타입의 슈퍼 타입이기 때문에 가능

// let num3 = 10 as string;  // A와 B가 겹치는 부분이 없다.
/**
 * 10은 Number 타입이고 Unknown은 모든 타입의 슈퍼 타입이기 때문에 가능
 * 10은 이제 Unknown 타입이 되었고, string 타입의 슈퍼타입이기 때문에 단언 가능!
 */
let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const; // const 단언은 const로 선언한 것과 동일한 효과를 주는 단언

// as const로 단언한 객체는 readonly로 처리된다. -> 프로퍼티의 값을 수정할 수 없다.
let cat = {
  name: "야옹이",
  color: "Brown",
} as const;

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "김태용",
};

// 옵셔널 체이닝을 사용하면 undefined 값이 들어갈 수 있어서 에러 발생
// ? 대신에 !를 사용하면 Null undefinded 값을 할당할 수 없다!
// const len : number = post.author?.length;
const len: number = post.author!.length;

// 타입 단업은 타입스크립트의 에러를 방지하는 방법이다! -> 위험한 문법 -> 확실할때만 사용하자!
