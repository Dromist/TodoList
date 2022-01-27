import React, {useState} from 'react';

const TodoItem = ({todo, onChange, remove, id, rename}) => {

    const [isEdited, setIsEdited] = useState(false)
    const [editText, setEditText] = useState(todo.title)

    const editItem = (id) => {
        setIsEdited(prev => !prev)
    }
    
    const onEdit = (e) => {
        setEditText(e.target.value)
    }    

    return (
        <div className='PostTodo'>
            <span className={todo.completed ? 'done' : null}>
                <input 
                    className="input__todo" 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />
                {isEdited
                    ? <input 
                    value={editText}
                    className="input__todo"
                    onChange={onEdit}
                    onBlur={() => {rename(todo.id, editText); setIsEdited(false)}}
                    />
                    : todo.title
                    
                }
            </span>
            <div className='btn'>
                <button className='btn__redact' onClick={ () => editItem(id)}><i class="fa fa-bars"></i></button>
                <button className='btn__trash' onClick={ () => remove(todo.id) }><i class="fa fa-close"></i></button>
            </div>
        </div>
    )
}

export default TodoItem;