import React from 'react';

const TodoItem = ({todo, onChange, remove}) => {

    const classes = [];

    if(todo.completed) {
        classes.push('done')
    }

    return (
        <div className='PostTodo'>
            <span className={classes.join(' ')}>
                <input 
                    className="input__todo" 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />
                {todo.title}
            </span>
            <div className='btn'>
                <button className='btn__redact'>&times;</button>
                <button className='btn__trash' onClick={ () => remove(todo.id) }>&times;</button>
            </div>
        </div>
    )
}

export default TodoItem;