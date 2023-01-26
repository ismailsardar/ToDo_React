import React, { useState } from 'react'

import style from './newTodo.module.css'

const NewTodo = (props) => {

    const [todo, setTodo] = useState({title:'',desc:''});
    const {title,desc} = todo;

    const handelChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo)=>{
            return {...oldTodo,[name]:event.target.value}
        });
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        // console.log(todo)
        props.onAddTodo(todo);
        setTodo({title:'',desc:''});
    }
  return (
    <form className={style.form} onSubmit={handelSubmit}>
        <div className={style['form-field']}>
            <label htmlFor="title">Title :</label>
            <input type="text" name="title" id="title" value={title} required onChange={handelChange}/>
        </div>
        <div className={style['form-field']}>
            <label htmlFor="desc">Description :</label>
            <textarea type="text" name="desc" id="desc" value={desc} required onChange={handelChange}/>
        </div>
        <button type="submit">Add ToDo</button>
    </form>
  )
}

export default NewTodo;