import React, {useState} from 'react';
import TodoList from './TodoList';
import './styles/index.css';
import AddForm from './AddForm';

function App() {

  let [todos, setTodos] = useState([
    { id: 1, completed: false, title: 'Buy a new gaming laptop'},
    { id: 2, completed: false, title: 'Complete a previous task'},
    { id: 3, completed: false, title: 'Create video for YouTube'},
    { id: 4, completed: false, title: 'Create a new portfolio site'},
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const doneTask = (todo) => {
    let copy = [...TodoList]
    setTodos(todos.map((todo) => {
      if(todo.completed) {
        copy = [...copy, {index: TodoList.length + 1}]
      }
    }))
    return setTodos(copy)
  }

  const deleteForm = () => {
    
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(q => q.id !== id))
  }

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  return (
      <div className="App">
        <h1>Todo App</h1>
        <AddForm create={createTodo}/>
        <TodoList todos={todos} onToggle={toggleTodo} remove={removeTodo}/>
        <button onClick={deleteForm}></button>
      </div>
  );
}

export default App;
