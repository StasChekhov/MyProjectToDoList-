import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import s from './components/Todo.module.css'


function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (form) => {
    if (form) {
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        task: form,
        complete: false
      }
      setTodos([newItem, ...todos])
    }
  }
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }
  const handleToggle = (id) => {
    setTodos([...todos.map((todo) =>
      todo.id === id ? { ...todo, complete : !todo.complete} : {...todo}  
    )])
  }
  return (
    <div >
      <header className={s.header}>
        <TodoForm
          addTask={addTask}
          />
          <h1 style={{color: "rgb(113, 113, 182)"}}>Tasks: {todos.length}</h1>
      </header>
      {todos.map((todo) => {
        return (
          <TodoList
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask = {removeTask}
          />
        )
      })}

      
      
    </div>
  );
}

export default App;

