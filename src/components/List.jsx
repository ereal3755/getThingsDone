import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'

export default function ItemsList({task, completion, deletion, edition, editDetails}){
    return(
        <li key={task.id} className={editDetails.editing && editDetails.editID === task.id? 'editing' : ''}>
            <div onClick={completion} className={task.complete ? 'complete' : ''}>
                {task.task} 
            </div>
            <button className="edit" onClick={edition}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className="delete" onClick={deletion}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </li>
    )
}