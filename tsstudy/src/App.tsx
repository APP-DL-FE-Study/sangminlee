import React, { useState } from 'react';
import Todo from './components/Todo';

export interface ITodo {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<ITodo[] | undefined>();
  const [text, setText] = useState('');
  const onSubmit = () => {
    const newTodo: ITodo = {
      id: Date.now(),
      text
    };
    setTodos(prev => {
      if(prev === undefined) return [newTodo]
      return [...prev, newTodo];
    });
    setText('');
  }
  const onDelete = (id: number) => {
    const newTodos = todos?.filter((item) => item.id !== id);
    setTodos(newTodos);
  }
  return (
    <div>
      <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} value={text}/>
      <button onClick={onSubmit}>submit</button>
      {todos?.map((item) => (<Todo key={item.id} item={item} onDelete={onDelete}/>))}
    </div>
  );
}

export default App;
