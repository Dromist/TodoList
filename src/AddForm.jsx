import React, {useState} from 'react'
import MyInput from './styles/IU/input/MyInput';
import MyButton from '../src/styles/IU/button/MyButton';

const AddForm = ({create}) => {

    const [todo, setTodo] = useState({completed: false, title: ''})

    const addNewTodo = (e) =>{
        e.preventDefault()
        const newTodo = {
            ...todo, id: Date.now()
        }
        if (todo.title !=='') {
            create(newTodo)
            setTodo({title: ''})
        }
    }

    return(
        <form className='form__todo'>
            <MyInput 
                value={todo.title}
                onChange={e => setTodo({...todo, title: e.target.value})}
                placeholder='Add your new todo' 
                type='text'
            />
            <MyButton onClick={addNewTodo}/>
        </form>
    )
}

export default AddForm;