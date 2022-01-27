import React from 'react';
import TodoItem from './styles/TodoItem';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map((todo) => 
                <TodoItem todo={todo} id={todo.id} key={todo.id} onChange={props.onToggle} remove={props.remove} rename={props.rename}/>
            )}
        </div>
    );
}

export default TodoList;