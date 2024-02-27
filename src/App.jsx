import Form from './components/Form.jsx'
import EditForm from './components/EditForm.jsx'
import Logo from './components/Logo.jsx'
import ItemsList from './components/List.jsx'
import React,{useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';

export default function App(){
  const [todos, setTodos] = useState(() =>{
    const savedTodos = localStorage.getItem("todoDATA")
    if(savedTodos == null) return [];
    return JSON.parse(savedTodos)
  });
  const [editStation, setEditStation] = useState({editing:false, editThis:'', editID:''})
  // saving
  useEffect(() =>{
    localStorage.setItem("todoDATA", JSON.stringify(todos))
  }, [todos])
  
  
  
  const addTodo = todo =>{
    setTodos((currentTodos) =>{
      return [
        ...currentTodos, 
        {id: uuidv4(), task: todo, complete: false}
      ]
    })
  }
  const completion = (id) =>{
    setTodos((currentTodos) =>
      currentTodos.map(todo =>
        todo.id === id? {...todo, complete: !todo.complete} : todo
      )
    )
  }
  const deletion = (id) =>{
    setTodos((currentTodos) =>
      currentTodos.filter(todo =>
        todo.id !== id
      )
    )
  }
  const edition = (id, task) =>{
    if(editStation.editID !== id || editStation.editing === false){
      setEditStation({editing:true, editThis: task, editID: id})
    }
  }

  const editToDo = (id, task) =>{
    setTodos((currentTodos) =>
      currentTodos.map(todo =>
        todo.id === id? {...todo, task: task} : todo
      )
    )
    setEditStation({editing:false})
  }
  return(
    <div className="container">
      <Logo />
      <Form addTodo={addTodo} editing={editStation.editing}/>
      <EditForm editDetails={editStation} editToDo={editToDo}/>
      <ul className='list'>
        {todos.map(todo =>
          <ItemsList
            task={todo}
            completion={() => completion(todo.id)}
            deletion={() => deletion(todo.id)}
            edition={() => edition(todo.id, todo.task)}
            editDetails={editStation}
          />
        )}
      </ul>
    </div>
  )
}