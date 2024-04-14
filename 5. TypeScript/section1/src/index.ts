// import { hello } from './hello';
// hello();
// // 타입 검사할때는 tsx 파일 경로 -> 여기서는 tsx src/index.ts
// console.log('Hello Typescript!');
// const a: number = 1;
// // 검사된 파일은 JS 파일을 반환한다.
// // 반환된 파일을 실행하는 법 -> node src/index.js

// // 그렇다면 할 때 마다 *.ts를 컴파일하고 node로 실행해야할까?
// // ts-node를 사용하면 된다. -> npm i -g ts-node
// // 즉시 실행 방법 : ts-node src/index.ts
// ts-nodes는 타입스크립트를 실행할 수 있는 런타임 환경을 제공한다.
// node LTS 버전이 20 이상으로 올라가면서 ts-node를 사용하지 않고, tsx를 사용한다.

const a = 1;
// Cannot redeclare block-scoped variable 'a' => 똑같은 이름의 변수를 같운 스코프 내에서 두번 선언할 수 없다.
// 타입스크립트에서는 모든 스크립트 파일이 모듈로 간주되기 때문에 같은 스코프 내에서 같은 이름의 변수를 선언할 수 없다.

// 모듈 시스템을 활용해서 해결할 수 있다.
// 1. 빈 {} export 키워드를 사용해서 변수를 외부로 노출한다.

export {};
