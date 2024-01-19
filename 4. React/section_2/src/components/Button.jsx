import "./Button.css";

// export default function Button(props) {
  
//   const {color, text} = props;
//   console.log(props)
//   return <button 
//   style={{
//     // backgroundColor: props.color, 
//     backgroundColor: color, 
//   }}
//   // className="button">{props.text}</button>
//   className="button">{text}</button>
// }
export default function Button({color, text, children}) {

  const onClick = (e) => {
    // alert("버튼을 클릭했습니다!")
    // Synthetic Base Event => 합성 이벤트 = 모든 브라우저에서의 이벤트 객체를 하나로 통일한 형태
    // 브라우저마다 이벤트 타겟을 부르는 이름이 달라서, 하나로 통일하고 싶다! => 크로스 브라우징 이슈를 해결하는 방법이 합성 이벤트!
    console.log(e);
  }
  
  return <button
  // onClick={() => {
  //   alert("버튼을 클릭했습니다!");
  // }}
  onClick={onClick}
  style={{
    // backgroundColor: props.color, 
    backgroundColor: color, 
  }}
  // className="button">{props.text}</button>
  className="button">{children}</button>
}