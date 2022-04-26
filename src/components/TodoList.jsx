import React from 'react';
import s from './Todo.module.css'

export default function TodoList({todo, removeTask, toggleTask}) {
  return (
    <div className={s.box}>
        <div className={todo.complete ? s.divComplete : s.div} key={todo.id}
            onClick={()=> toggleTask(todo.id)}>
            <div >
                {todo.task}
            </div>
        </div>
        <div className={s.div2} onClick={() => removeTask(todo.id)}>
            X
        </div>
    </div>    
  )
}
