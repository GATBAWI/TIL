/**
 * 제네릭 클래스
 */

// class NumberList {
//   constructor(private list: number[]) {}

//   push(data: number) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// 제네릭 클래스는 제네릭 타입 변수오 제네릭 인터페이스와는 다르게
// 클래스 생성자를 호출할 때 생성자에 전달되는 인자값으로 타입을 추론하여 타입이 결정된다.
// 인스턴스를 만들때 타입을 명시하지 않아도 된다.

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["a", "b", "c"]);
stringList.pop();
stringList.push("d");
stringList.print();
