import React from 'react'

import ToDo from './ToDo';
import style from './ToDos.module.css';

const ToDos = (props) => {
    // console.log(props.todos)
    // const handelRemoveTodo = (id)=>{
    //     props.onRemove(id);
    // }
  return (
    <section className={style.todos}>
        {
            props.todos.map((todo) =>
             (<ToDo key={todo.id} todo={todo.newTodo} id={todo.id} onRemove={props.onRemove}/>)
             )
        }
    </section>
  )
}

export default ToDos;