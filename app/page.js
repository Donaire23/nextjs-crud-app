'use client'

import { useEffect, useState } from "react"
import Axios from 'axios'

export default function Home() {

  const [task, setTask] = useState([]);
  const [todo, setTodo] = useState();
  const [newTasks, setNewTasks] = useState();
  const [key, setKey] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {

    Axios.get("http://localhost:3000/api/todo").then((response) => {

    setTask(response.data);

    })

  }, [task])

 
  const addTasks = () => {

    const data = {
      Tasks: newTasks
    }

    Axios.post("http://localhost:3000/api/todo", data);

  };

  const deleteTask = (id) => {

    Axios.delete(`http://localhost:3000/api/todo?id=${id}`);

  };

  const updateTask = (id) => {

    const data = {
      id: id,
      Tasks: todo
    }

    Axios.put("http://localhost:3000/api/todo", data);
    setKey(null);

  }

  return (

   <>

    <div className="text-center mt-5">

      <input value={newTasks} onChange={(e) => setNewTasks(e.target.value)}/>

      <button className="ms-2" onClick={addTasks}>Add Task</button>

    </div>
    
    <div>

      {task && task.length === 0 ? <p>No Tasks</p> : 

        task && task.map((val) => {

          return (

           <div className="mt-2 mb-2 text-center" id={val._id} key={val._id}>

            <input defaultValue={val.Tasks} onChange={(e) => setTodo(e.target.value)} disabled={val._id === key ? !isDisabled : isDisabled}/>
            <button className="ms-2 me-2" onClick={() => {

              setKey(val._id);

            }}>Edit</button>
            <button className="me-2" onClick={() => deleteTask(val._id)}>Delete</button>
            {val._id === key ?  <button onClick={() => updateTask(val._id)}>Update</button> : null}

           
           
          </div>

          )

        })
      }
      
    </div>


   </>


  )


}
