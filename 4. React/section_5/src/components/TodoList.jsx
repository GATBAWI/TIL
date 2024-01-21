import { TodoStateContext } from "./TodoContext";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useState, useMemo, useContext } from "react";

export default function TodoList() {
  const todos = useContext(TodoStateContext);

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTodos = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  // const getAnalyzedTodoData = () => {
  //   console.log("TODO 분석 함수 호출");
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => {
  //     return todo.isDone === true;
  //   }).length;
  //   const notDoneCount = totalCount - doneCount;
  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    // console.log("TODO 분석 함수 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => {
      return todo.isDone === true;
    }).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <div>
        <div>전체 Todo : {totalCount}</div>
        <div>완료 Todo : {doneCount}</div>
        <div>계획 Todo : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="todos_wrapper">
        {/* <TodoItem />
        <TodoItem />
        <TodoItem /> */}
        {filterTodos().map((todo) => {
          // return <div>{todo.content}</div>;
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
}
