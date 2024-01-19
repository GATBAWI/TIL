import "./Body.css";
import {useState} from "react";


function Lightbulb({light}) {
  console.log("Light Bulb", light)
  return (
    <>
    {light === "ON" ? (
      <div style={{backgroundColor: "orange"}}>{light}</div>
    ) : (
      <div style={{backgroundColor: "gray"}}>{light}</div>
    )}
    </>
  )
}

function StaticLightbulb (){
  console.log("STATIC LIGHT BULB")
  return <div style={{ backgroundColor:"gray" }}>OFF</div>
}

export default function Body() {
  // useState("OFF") -> 초기값
  const [light, setLight] = useState("OFF");
  // 배열의 구조분해 할당 -> [light, setLight]
  // useState의 반환값 -> state 값, 상태변화함수(state의 상태를 변화시키는 함수)
  console.log(light);

  return <div className="body">
    <StaticLightbulb light={light}/>
    <Lightbulb light={light} />
    <button onClick={()=> {setLight("ON")}}>켜기</button>
    <button onClick={()=> {setLight("OFF")}}>끄기</button>
    
  </div>
}