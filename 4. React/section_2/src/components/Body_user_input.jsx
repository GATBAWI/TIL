import "./Body.css";
import { useState } from "react";

export default function Body() {

  // const [name, setName] = useState("")
  // const [gender, setGender] = useState("")
  // const [bio, setBio] = useState("")
  const [state, setState] = useState({
    name: "",
    gender: "",
    bio: "",
  })


  // const onChangeName = (e) => {
  //   // setName(e.target.value);
  //   setState({
  //     ...state,
  //     name: e.target.value,
  //   })
  // }
  // // console.log(name);

  // const onChangeGender = (e) => {
  //   // setGender(e.target.value);
  //   setState({
  //     ...state,
  //     gender: e.target.value,
  //   })
  // }
  // // console.log(gender)

  // const onChangeBio = (e) => {
  //   // setBio(e.target.value)
  //   setState({
  //     ...state,
  //     bio: e.target.value,
  //   })
  // }
  // // console.log(bio)

  const onChange = (e) => {
    // setState => 새로운 객체 생성
    // [e.target.name] => 계산된 프로퍼티 => 변수의 값을 키로 쓰겠다!
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    console.log(e.tartget.name, '+', e.target.value)
  }

  return (
  <div className="body">
    {/* e.target.value => input.value*/}
    {/* <input value={name} onChange={(e) => {setName(e.target.value)}} /> */}
    <input value={state.name} onChange={onChange} name={"name"}/>
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
  </div>
  );
}