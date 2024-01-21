import { TodoDispatchContext } from "./TodoContext";
import "./TodoItem.css";
import { memo, useContext } from "react";

// onUpdate, onDelete => 참조형 객체이기 때문에 할당할때마다 다른 주소값을 가지게 된다. => memo에서는 달라졌다고 판단!
function TodoItem({ id, isDone, createdDate, content }) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

export default memo(TodoItem);
