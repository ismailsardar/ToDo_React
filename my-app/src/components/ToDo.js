import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

import style from './ToDo.module.css'

const ToDo = (props) => {
    const {title,desc} = props.todo;
    const {id} = props;
    const handelChange =(id)=>{
        props.onRemove(id);
    }
  return (
    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button className={style.btn} onClick={()=>{handelChange(id)}}>
                <FaTrashAlt />
            </button>
        </div>
    </article>
  )
}

export default ToDo;