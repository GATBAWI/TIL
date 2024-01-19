export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multifly(a, b) {
  return a * b;
}

// CJS (Common JS) - 고전 모듈 시스템 
// module.exports = {
//   add,
//   sub,
// }

// ESM - ES 모듈 시스템
// require is not defined in ES module scope, you can use import instead

// export {add, sub};