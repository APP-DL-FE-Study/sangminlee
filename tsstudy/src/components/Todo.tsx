import React from 'react';
import { ITodo } from '../App';


interface IProps {
  item: ITodo;
  onDelete: (id: number) => void;
}
const Todo = ({item, onDelete}: IProps) => {
  return (
    <div>
      <span>{item.text}</span>
      <button onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
};

export default Todo;