import { useEffect } from "react";

export default function Even() {
  useEffect(() => {
    // useEffect의 콜백함수가 익명함수를 반환하는것은, useEffect가 다시 호출되거나 콜백함수를 다시 호출하면 실행된다.
    // 빈 배열을 추적하기 때문에 Mount 시에는 아무것도 실행되지않지만, unMount될 때는 return이 동작하면서 console이 동작한다.
    return () => {
      console.log("Unmount!");
    };
  }, []);

  return <div>짝수입니다!</div>;
}
