import { useState, useEffect, useRef } from "react";
import "./App.css";
import Controller from "./components/Controller.jsx";
import Viewer from "./components/Viewer.jsx";
import Even from "./components/Even.jsx";
import useUpdate from "./hooks/useUpdate.js";
import useInput from "./hooks/useInput.js";

// 1. Mount : 탄생
// 2. Update : 변화 & 리렌더링
// 3. Unmount : 죽음

function App() {
  // state Lifting => 여러 컴포넌트들이 공유할 수 있도록 상위 컴포넌트에서 공유하는 것
  // 단방향 데이터 흐름 => 데이터의 흐름을 파악하기 쉽다. 아무리 복잡한 어플리케이션을 만들더라도 데이터 흐름 파악이 직관적!
  // 상태변화함수들은 비동기적으로 수행된다. => console.log 는 동기적으로 수행된다. => 상태변화함수보다 console.log 가 먼저 출력됨!
  const [count, setCount] = useState(0);
  // const [text, setText] = useState("");
  const [text, onChangeText] = useInput();

  // const isMountRef = useRef(false);

  // // useEffect => (콜백함수, 의존성배열(Dependency Array = 줄여서 Deps)) => 배열 안에 있는 변수의 상태가 변경되면 콜백함수가 실행된다.
  // // 새로고침하면 처음 useEffect 가 생기는 이유는 앱이 mount 되면서 랜더링이 진행되기때문에 생성된다.
  // // useEffect(() => {
  // //   console.log(`카운트 : ${count}`);
  // // }, [count]);

  // // useEffect(() => {
  // //   console.log(`텍스트 : ${text}`);
  // // }, [text]);

  // useEffect(() => {
  //   if (!isMountRef.current) {
  //     isMountRef.current = true;
  //     return;
  //   }
  //   console.log("Update");
  // });

  useUpdate(() => {
    console.log("App 컴포넌트 업데이트");
  });

  // Mount 되는 시점만 Targeting 하는 방법
  // 빈배열 => 어떠한 값도 추적하지 않겠다! => useEffect를 한번만 실행할거야! 할 때 사용
  useEffect(() => {
    console.log("Mount");
  }, []);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  // const onChangeText = (e) => {
  //   setText(e.target.value);
  // };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
