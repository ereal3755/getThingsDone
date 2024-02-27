import React,{useState,useEffect} from "react"


export default function EditForm({editDetails, editToDo}){
    const [editInput, setEditInput] = useState('');

    useEffect(() => {
        setEditInput(editDetails.editThis);
      }, [editDetails.editThis]);

    const handleEdit = (e) =>{
        e.preventDefault();
        editToDo(editDetails.editID, editInput);
    }
      
    return(
        <form className={`editForm ${editDetails.editing? 'editing' : ''}`} onSubmit={handleEdit}>
            <input 
                value={editInput}
                onChange={e => setEditInput(e.target.value)}
            />
            <button type="submit">Edit Task</button>
        </form>
    )
}