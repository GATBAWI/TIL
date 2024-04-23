/**
 * 타입 추론
 *
 */

// let a : number = 10;
// 타입스크립트는 변수의 타입을 추론한다.
// let a = 10; // number 타입을 추론

// 매개변수의 타입을 직접 지정해주지 않으면 타입 추론이 불가능해서 에러 발생
// function func(param) {}

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "김태용",
  profile: {
    nickName: "TEO",
  },
  urls: ["https://github.com/GATBAWI"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// 함수의 매개변수에 기본값이 있다면 기본값을 기준을 타입 추론이 진행된다.
function func(message = "hello") {
  // 함수의 타입 추론은 반환값을 기준으로 진행된다.
  return "hello!";
}

/**
 * Any 타입의 진화
 */
// 암묵적으로 추론된 any 타입은 진화가 된다! -> 할당되는 값에 따라서 타입이 변경된다.
let d; // any 타입

d = 10; // any -> Number
d.toFixed();

d = "hello"; // number -> string
d.toUpperCase();

const num = 10;
// number literal type으로 추론된다. -> const 이기 때문이다!
const str = "Hello!";

// 여러가지 값이 할당되면, 공통된 타입을 가질 수 있도록 추론된다.
let arr = [1, "str"];
