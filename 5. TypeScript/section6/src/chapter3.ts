/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  // 인터페이스는 무조건 public 이다! -> 다른 접근제어자 불가능
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // Character 클래스는 CharacterInterface 인터페이스를 구현한다.
  // name: string;
  // moveSpeed: number;

  // 생성자에 접근 제어자를 달면 필드와 생성자 초기화를 진행하지 않아도 된다!
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {
    // this.name = name;
    // this.moveSpeed = moveSpeed;
  }

  move() {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
