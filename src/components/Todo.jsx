import { useState } from 'react';
import "../style.css"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")
    
    const handleInput = e => {
        setInput(e.target.value)
    }
    
    const handleAddTask = () => {
        setTodos( (todos) => {
            return todos.concat({
                text: input,
                id: Math.floor(Math.random() * 10),
            });
        });
        
        setInput("");
    };

    const removeTodo = id => setTodos(todos => todos.filter(t => t.id !== id));
    
    return(
        <div className='container'>
            <input type='text' placeholder='Write your task' value={input} onChange={handleInput}/>
            <button onClick={handleAddTask}>ADD</button>

            <ul className='todos-list'>
                {todos.map(({text,id}) => (
                    <li className='todo' key={id}>
                        <span>{text}</span>
                        <button className='close' onClick={()=>removeTodo(id)}>X</button>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Todo;