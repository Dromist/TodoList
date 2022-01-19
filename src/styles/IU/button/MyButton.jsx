import React from 'react'
import classes from '../button/MyButton.module.css'

const MyButton = (props) => {
    return (
        <button type='submit' className={classes.myButton} {...props}>Create</button>
    )
}

export default MyButton;