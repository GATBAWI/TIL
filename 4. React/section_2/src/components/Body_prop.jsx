import "./Body.css";
import Button from "./Button.jsx";

export default function Body () {
//   // JSX 에서는 숫자나 문자값만 렌더링 할 수 있다.
//   const number = 10;
//   const string = "김태용"
//   const bool = true;  // 불리언 타입 렌더링 불가능
//   const obj = { // 객체는 리액트의 자식 요소로 부적절하다!
//     id: 1,  // 객체 내부 프로퍼티의 값은 출력 가능하다!
//   }
//   const user = {
//     name: "김태용",
//     isLogin : true,
//   }

//   if (user.isLogin) {
//     return <div>마이페이지, 로그아웃</div>
//   } else {
//     return <div>로그인</div>
//   }

//   return (
//     // JSX에서 return 하는 태그들은 항상 최상위 태그로 감싸져야한다.
//     // 렌더링 시 항상 div 가 생기는데 div로 감싸지는것을 원하지는 않지만 감싸야 한다면 빈 태그!
//     <> 
//       <h1>BODY</h1>
//       <h2>{number}</h2>
//       <h2>{number + 30}</h2>
//       <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
//       <h2>{string}</h2>
//       <h2>{bool}</h2>
//       <h2>{obj.a}</h2>
//       {/* 조건부 렌더링 */}
//       {number % 2 === 0 ? (
//         <div>{number}는 짝수입니다.</div>
//       ) : (
//         <div>{number}는 홀수입니다.</div>
//       )}
//       {user.isLogin ? (
//         <div>마이페이지, 로그아웃</div>
//       ):(
//         <div>로그인</div>
//       )}
//       {/* JSX 에서는 항상 닫는 태그를 달아야한다 -> 달지 않으면 무조건 오류가 발생한다. */}
//     </>
//   );
// }

const buttonProps = {
  text: "1번 버튼",
  color: "red",
  a: 1,
  b: 2,
  c: 3,
};

function ButtonChild() {
  return (
    <div>BUTTON CHILD</div>
  )
}

return (
  // <div style={{
  //   backgroundColor: "green",
  //   borderBottom: "5px solid blue",
  // }}>
  //   <h1>BODY</h1>
  // </div>
  <div className="body">
    <h1>BODY</h1>
    <Button {...buttonProps} >
      <ButtonChild />
      <div>버튼</div>
    </Button>
    <Button text={"2번 버튼"} color={"blue"} />
    <Button text={"3번 버튼"} color={"green"}/>
  </div>
)

}
// html을 리턴하는것은 불가능하지만 리액트에서는 JSX 문법을 통해서 html 태그를 리턴할 수 있다.