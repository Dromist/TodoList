import React from 'react';
import TodoItem from './styles/TodoItem';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map((todo) => 
                <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} remove={props.remove}/>
            )}
        </div>
    );
}

export default TodoList;