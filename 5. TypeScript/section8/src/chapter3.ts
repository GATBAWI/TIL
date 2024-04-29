/**
 * 맵드 타입 - 실무에서 자주 사용한다!
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 유저 정보의 일부분만 수정하기 위한 인터페이스 추가
// interface PartialUser {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// 맵드 타입은 인터페이스로 사용 불가능하다! -> 반드시 타입 별칭으로 작성해야 한다.!

type PartialUser = {
  // 대괄호 : 이 객체의 키가 무엇이 될 수 있는지 확인
  // 이 객체에는 키로 올 수 있는 값음 id, name, age 중 하나이다.
  // 왼쪽은 대괄호 안의 키를 바탕으로 value가 결정된다.
  // 전체 프로퍼티를 필요로 하는 것이 아니라 선택적 프로퍼티를 적용하기 위해서 ? 적용!
  [key in "id" | "name" | "age"]?: User[key];
};

// type BooleanUser = {
//   [key in "id" | "name" | "age"]: boolean;
// };

// 만약 키가 너무 많아서 다 쓰기 힘들다면? -> keyof 연산자!
// keyof 타입 객체의 프로퍼티를 유니온으로 반환해준다!
type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "김태용",
    age: 30,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정 기능
}

updateUser({
  // id: 1,
  // name: "김태용",
  age: 30,
});
