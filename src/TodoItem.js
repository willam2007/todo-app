import React from 'react';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => completeTodo(index)}>Завершено</button>
      <button onClick={() => removeTodo(index)}>Удалить</button>
    </div>
  );
}

export default TodoItem;
