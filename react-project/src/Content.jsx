import React from 'react';

const Content = ({todo, onDelete}) => {
  const onClick = () => {
    onDelete(todo.id);
  }
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={onClick}>삭제</button>
    </div>
  );
};

export default Content;