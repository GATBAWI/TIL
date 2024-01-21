import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useState } from "react";

export default function TodoList({ todos, onUpdate, onDelete }) {
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

  return (
    <div className="TodoList">
      <h4>Todos</h4>
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
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
