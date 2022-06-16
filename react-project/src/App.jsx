import { useRef, useState } from 'react';
import './App.css';
import Content from './Content';


function App() {
  const inputRef = useRef();
  const [id, setId] = useState(1);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const onSubmit = () => {
    if(inputRef.current.value === '') return;
    const newTodo = {
      id,
      text: input
    }
    setTodos([...todos, newTodo]);
    setInput('');
    setId(prev => prev+1);
  }
  const onDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <input ref={inputRef} onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
      <button onClick={onSubmit}>제출</button>
      {
        todos.map((todo, index) => (<Content key={index} todo={todo} onDelete={onDelete}/>))
      }
    </div>
  );
}

export default App;
