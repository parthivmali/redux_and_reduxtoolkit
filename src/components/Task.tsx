import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask, editTask } from '../redux/action'

const Task = () => {
    const dispatch = useDispatch()
    const tasks = useSelector((state:any) => state.tasks.tasks)
    const [addNewTask,setAddNewTask] = useState("")
    const [editedTask,setEditedTask] = useState("")

    const handleAddOrUpdateTaskClick = () =>{
      if(editedTask){
        dispatch(editTask(editedTask, addNewTask));
        setEditedTask("")
      }else{
        dispatch(addTask(addNewTask))
      }
      setAddNewTask("")
    }

    const handleDelete = (id:any) => {
      dispatch(deleteTask(id))
    }

    const handleEdit = (value:any) => {
      console.log("value=>",value);
      
      // const taskToEdit = tasks.find((task:any)=> task.id === id)
      // if(taskToEdit){
      //   setAddNewTask(taskToEdit.text)
      //   setEditedTask(taskToEdit.id)
      // }
      // dispatch(editTask(value.id,editedTask))
      setEditedTask(value.id);
      setAddNewTask(value.text)
    }
  
  return (
    <>
      <div className='flex justify-center'>
        <div className='my-10 flex'>
          <input 
          type="text" 
          placeholder='Add task here...' 
          onChange={e => setAddNewTask(e.target.value)}
          value={addNewTask}
          className='bg-gray-300 text-3xl'
          />
          <button onClick={handleAddOrUpdateTaskClick} className='p-2 bg-black text-white'>{editedTask ? 'Update Task' : 'Add Task'}</button>

        </div>
      </div>
      <div>
        <h3 className='font-bold text-lg'>Your Task: </h3>
        <ul className="">
          {tasks?.map((task:any) => (
            <li className="flex items-center" key={task.id}>
              <div className='flex items-center border-2 border-black p-1'>
                <div className='w-96 border p-2 border-black'>{task.text}</div>
                <button
                  className="p-2 mx-5 bg-red-500 text-white"
                  onClick={() => handleDelete(task.id)}
                >
                  delete
                </button>
                <button
                  className="p-2 bg-blue-500 text-white"
                  onClick={() => handleEdit(task)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Task
