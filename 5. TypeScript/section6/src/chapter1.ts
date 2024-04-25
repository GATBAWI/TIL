/**
 * 타입스크립트의 클래스
 */

const employeeA = {
  name: "김태용",
  age: 30,
  position: "Developer",
  work() {
    console.log("Work Hard!");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("Work Hard!");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("김태용", 30, "Developer");
console.log(employeeB);

// 타입스크립트를 이용한 클래스는 타입으로도 사용할 수 있다.
// 타입스크립트는 구조적으로 타입을 결정하는 구조적 타입 시스템을 사용한다.
// 클래스의 구조를 파악해서 같은 구조를 가진다면 같은 타입으로 간주한다.
const empolyeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
