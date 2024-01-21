import { useRef, useState, useReducer, useCallback, useMemo } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import TodoEditor from "./components/TodoEditor.jsx";
import TodoList from "./components/TodoList.jsx";
import {
  TodoStateContext,
  TodoDispatchContext,
} from "./components/TodoContext.jsx";

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "구미 버스",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "이슈 등록하기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "UPDATE": {
      return state.map((it) => {
        return it.id === action.data ? { ...it, isDone: !it.isDone } : it;
      });
    }
    case "DELETE": {
      return state.filter((it) => {
        return it.id !== action.data;
      });
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  const onCreate = (content) => {
    // setTodos([newTodo, ...todos]);
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
  };

  // 함수의 재생성을 방지하고 싶은 함수를 첫번째 인자로 넣고, 의존성 배열로 변화를 감지할 변수를 넣는다.
  const onUpdate = useCallback((targetId) => {
    // setTodos(
    //   todos.map((todo) => {
    //     return todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo;
    //   })
    // );
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
    // Deps에 아무것도 넣지 않으면, 처음 Mount 될 때만 감지한다.
    // 실제 변화 자체는 감지!
  }, []);

  const onDelete = useCallback((targetId) => {
    // setTodos(
    //   todos.filter((todo) => {
    //     return todo.id !== targetId;
    //   })
    // );
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  }, []);

  // 다시는 재생성 되지 않는 객체 등록!
  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
