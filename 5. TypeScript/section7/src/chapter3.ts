/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  // K, V = 타입 변수(= 타입 파라미터 = 제네리 타입 변수 = 제네릭 타입 파라미터)
  key: K;
  value: V;
}

// 제네릭 인터페이스를 사용할때는 타입으로 정의한 타입을 사용할 때 변수에 할당할 타입을 꺽쇠와 함께 반드시 사용해야한다!
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["Hello", "World"],
};

/**
 * 인덱스 시그니처
 */

// 프로퍼티의 키와 밸류에 해당하는 타입의 규칙만 맞으면 어떤 객체는 허용하는 유연한 문법!
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};
let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  // profile: Student | Developer;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // if (user.profile.type !== "student") {
  //   console.log("잘 못 오셨습니다.");
  //   return;
  // }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
}

const developerUser: User<Developer> = {
  name: "김태용",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "도리원초등학교",
  },
};
