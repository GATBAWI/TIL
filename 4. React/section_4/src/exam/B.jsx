import { useReducer } from "react";

// useReducer 는 컴포넌트 밖에서 접근 가능하다는 특장점이 있다!

// reducer 에서는 현재 스테이트의 값과 dispatch 호출 시 객체가 action이라는 이름으로 들어간다.
function reducer(state, action) {
  if (action.type === "DECREASE") {
    return state - action.data;
  } else if (action.type === "INCREASE") {
    return state + action.data;
  }
}

export default function B() {
  // useReducer 호출 시 새로운 state 가 자동으로 생성된다. 그 때 초기값은 useReducer의 두번째 인자
  // 첫번째 요소 :  값(state)
  // 두번째 요소 (dispatch) : trigger => 상태변화를 발생 => 상태변화를 유발하기만 할 뿐 직접적으로 상태변화를 하지 않는다. => 실제 상태변화는 reducer에서 진행!
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h4>{count}</h4>
      <div>
        <button
          onClick={() => {
            // dispatch 함수 호출 시, reducer 동작
            dispatch({
              type: "DECREASE",
              data: 1,
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            // dispatch 함수 호출 시, reducer 동작
            dispatch({
              type: "INCREASE",
              data: 1,
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
