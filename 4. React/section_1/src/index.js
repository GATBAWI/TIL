// console.log("Hello Node.js");

// 해당 경로의 모듈을 가져와서 반환!
// const moduleData = require("./math.js")
// const {add, sub} = require("./math.js")

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// ESM 시스템에서는 확장자까지 꼭 써줘야 한다!
// import {add, sub} from "./math.js"
// import multifly from "./math.js";
// import mul from "./math.js";
import mul, {add, sub} from "./math.js"

// 경로를 명시하지 않는다면 randomcolor 라는 이름을 가진 라이브러리를 노드 모듈로 부터 불러오겠다!
import randomColor from "randomcolor"

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2 ,100));

// ESM - ES 모듈 시스템
// require is not defined in ES module scope, you can use import instead

const color = randomColor();
console.log(color);

// node_modules, package-lock.json 을 삭제해도, npm install 을 하면 다시 설치할 수 있다.
// 그 기반은 package.json 에 있기 때문에, 의존성에 있는 라이브러리를 다시 설치한다!