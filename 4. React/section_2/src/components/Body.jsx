import "./Body.css";
import { useRef, useState } from "react";

export default function Body() {

  const [state, setState] = useState({
    name: "",
    gender: "",
    bio: "",
  })

  // useRef -> 레퍼런스 객체를 반환 -> 컴포넌트가 리렌더링 되어도 그대로 유지된다.
  // 특정 객체 참조용!
  const nameRef = useRef()

  const onChange = (e) => {
    // setState => 새로운 객체 생성
    // [e.target.name] => 계산된 프로퍼티 => 변수의 값을 키로 쓰겠다!
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, '+', e.target.value)
  }

  const onSubmit = () => {

    if (state.name === "") {
      nameRef.current.focus()
      return
    }
    console.log(state)
    alert(`${state.name}님 회원가입을 축하합니다!`)
  }

  return (
  <div className="body">
    {/* e.target.value => input.value*/}
    {/* <input value={name} onChange={(e) => {setName(e.target.value)}} /> */}
    <input ref={nameRef} value={state.name} onChange={onChange} name={"name"}/>
    <div>현재 입력된 값 : {state.name}</div>
    <div>입력 제한 : {state.name.length} / 600</div>
    <div>
      <select value={state.gender} onChange={onChange} name={"gender"}>
        <option value="">밝히지 않음</option>
        <option value="female">여성</option>
        <option value="male">남성</option>
      </select>
    </div>
    <div>
      <textarea value={state.bio} onChange={onChange} name={"bio"}/>
    </div>
    <div>
      <button onClick={onSubmit}>회원가입</button>
    </div>
  </div>
  );
}