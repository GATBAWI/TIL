/**
 * 접근 제어자
 * access modifier
 * 클래스를 만들 때 특정 필드나 메소드에 접근 할 수 있는 범위를 설정하는 문법
 * => public, private, protected
 */

class Employee {
  // 필드
  // public : 자유롭게 인스턴스에 접근할 수 있다. -> 아무 제약이 없는 상태 (default 값)
  // public name: string;
  // 필드의 접근 제어로 private를 설정할 경우 클래스 외부에서 접근할 수 없다. -> 읽을수도 없다.
  // 접근하려면 클래스 내부의 메서드에서만 접근할 수 있다.
  // private name: string;
  // protected age: number;
  // position: string;

  // 생성자
  // 생성자에 접근 제어자를 달면 필드에서는 접근 제어자를 달 필요가 없다.
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // 접근 제어자를 달게 되면 자동으로 생성자 초기화를 진행해서 아래 처럼 쓰지 않아도 된다.
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} Work Hard!`);
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

  // 메서드
  func() {
    // private를 설정하게 되면 파생 클래스에서도 접근이 불가능하다!
    // 파생클래스에서 접근 가능하게 하려면 protected를 사용해야 한다.
    // this.name;
    this.age;
  }
}

const employee = new Employee("김태용", 30, "Developer");
// employee.name = "홍길동";
// employee.age = 100;
employee.position = "Hero";

console.log(employee);
