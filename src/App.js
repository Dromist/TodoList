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
    setTodos((prevTodos) => {
      const newTodoList = prevTodos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    return newTodoList.sort((a, b) => a.completed - b.completed)
    });
  }

  const renameTodo = (id, value) => {
    const rename = todos.map((todo) => {
      if(todo.id === id) {
        todo.title = value;
      }
      return todo;
    })
    setTodos(rename)
  }

  const deleteForm = () => {
    setTodos([])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(q => q.id !== id))
  }

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const activeSize = todos.filter((todo) => todo.completed).length

  return (
      <div className="App">
        <h1>Todo App</h1>
        <AddForm create={createTodo}/>
        <TodoList todos={todos} onToggle={toggleTodo} remove={removeTodo} rename={renameTodo}/>
        <div className='footer'>
          <h6>Количество выполненных задач: {activeSize}</h6>
          <button className='all__delete' onClick={deleteForm}><i class="fa fa-trash"></i>Clear all</button>
        </div>
      </div>
  );
}

export default App;
