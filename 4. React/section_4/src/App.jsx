import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import TodoEditor from "./components/TodoEditor.jsx";
import TodoList from "./components/TodoList.jsx";

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

function App() {
  const [todos, setTodos] = useState(mockData);

  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };

    setTodos(
      // 기존 배열의 맨 뒤에 추가!
      // [...todos, newTodo]
      // 기존 배열의 맨 앞에 추가!
      [newTodo, ...todos]
    );
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        // if (todo.id === targetId) {
        //   // isDone의 값 change
        //   return {
        //     ...todo,
        //     isDone: !todo.isDone,
        //   };
        // } else {
        //   // isDone 의 값 그대로 유지
        //   // 원래 todos 를 반환
        //   return todo;
        // }
        return todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const onDelete = (targetId) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== targetId;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
