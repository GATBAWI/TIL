/**
 * 클래스
 *
 */

let studentA = {
  name: "김태용",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 !");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

// let studentB = {
//   name: "홍길동",
//   grade: "B-",
//   age: 27,
//   study() {
//     console.log("열심히 공부 !");
//   },
//   introduce() {
//     console.log("안녕하세요!");
//   },
// };

class Student {
  // 필드 : 클래스가 만들어 낼 객체의 프로퍼티!
  name;
  grade;
  age;

  // 생성자 : 클래스 호출 시 실제로 객체를 생성하는 메서드!
  constructor(name, grade, age) {
    // 이 때 this는 클래스가 지금 만들고 있는 객체! -> 지금 생성하고 있는 객체의 프로퍼티!
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 !");
  }

  introduce() {
    // this를 이용하면 현재 객체의 프로퍼티를 가져와서 사용할 수 있다.
    console.log(`안녕하세요! ${this.name} 입니다!`);
  }
}

// 클래스를 이용한 객체 생성 방법 -> 클래스를 사용해서 객체를 생성할때는 new 키워드를 사용!
// new 클래스명() -> 이 때 괄호는 생성자를 호출하는 것!
// 클래스를 이용해서 만든 객체는 "인스턴스"라고 한다!
let studentB = new Student("김태용", "A+", 30);

console.log(studentB);

studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
  // 필드
  // name;
  // grade;
  // age;
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    // this.name = name;
    // this.grade = grade;
    // this.age = age;
    // super 함수를 호출하면 부모 클래스의 생성자가 호출이 된다. (부모 생성자의 프로퍼티 설정을 받아온다.)
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  // study() {
  //   console.log("열심히 공부 !");
  // }

  // introduce() {
  //   console.log(`안녕하세요! ${this.name} 입니다!`);
  // }

  programming() {
    console.log(`${this.favoriteSkill}로 개발을 합니다!`);
  }
}

let studentDeveloper = new StudentDeveloper("김태용", "A-", 30, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
