import { createContext } from "react";

// export const TodoContext = createContext();

// TodoContext.Provider : Context가 어떤 컴포넌트에 데이터를 전달할 것인지 결정!

// 상태가 변화는 것과 변하지 않는것을 구분해서 context를 생성!

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
