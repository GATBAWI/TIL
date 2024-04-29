/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// type ColoredAnimal = "red-dog" | "red-cat" | "red-chicken" | "black-dog";

// 하나하나 다 쓰기가 귀찮고 힘들다 -> 템플릿 리터럴 타입으로 극복!
// 템플릿 리터럴을 활용해서 작성하게 되면, 모든 조합의 리터럴 타입을 다 만들 수 있다.
type ColoredAnimal = `${Color}-${Animal}`;
