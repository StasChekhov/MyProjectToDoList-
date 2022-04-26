import { useState } from "react";
import s from './Todo.module.css'



export default function TodoForm({addTask}) {
    const [form, setForm] = useState('');

    const handleChange = e => {
        setForm(e.currentTarget.value);
         
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        addTask(form)
        setForm('')
    }

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <input
                type="text"
                value={form}
                onChange={handleChange}
                placeholder="Enter the name..."
                className={s.input}
            />
            <button
               className={s.button} type="submit" >Add</button>
        </form>
    )
}
