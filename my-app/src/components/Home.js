import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import ToDos from './ToDos';
import style from './Home.module.css'
import NewTodo from './NewTodo';


const Home = () => {
    const [todos, setTodos] = useState([]);
    const handelNewTodo = (newTodo)=>{
        setTodos((oldTodo)=>{
            return [...oldTodo,{id:uuidv4(), newTodo}]
        });
        // console.log(newTodo)
    }
    const handelRemoveTodo = (id)=>{
        // console.log(id);
        setTodos((oldTodo)=>{
            const filterTodo = oldTodo.filter((todo) => todo.id !== id);
            return filterTodo;
        });
    }
  return (
    <div className={style.contener} >
        <h1>To-Do App</h1>
        <NewTodo onAddTodo={handelNewTodo}/>
        <ToDos todos={todos} onRemove={handelRemoveTodo}/>
    </div>
  )
}

export default Home;