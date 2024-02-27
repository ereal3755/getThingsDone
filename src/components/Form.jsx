import React,{useState} from "react"

export default function Form({addTodo, editing}){
    const [input, setInput] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(input !== ''){
            addTodo(input)
        }
        setInput('');
    }
    return(
        <>
            <form className={`inputForm ${ editing? 'editing' : ''}`} onSubmit={handleSubmit}>
                <input 
                    placeholder="add a Task"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </>
    )
}