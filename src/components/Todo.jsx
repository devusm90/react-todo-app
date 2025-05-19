import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'
import ListTasks from './ListTasks'
import  './Todo.css'

const ToDo = () => {
    const [taskList, setTaskList] = useState([]);
    useEffect(() => {
        document.title = `You have ${taskList.length} pending tasks`;
    })


    const handleAddTask = (title) => {
        const newTask = [...taskList, { title }]
        setTaskList(newTask);
    }

    const handleRemoveTask = (index) => {
        const newTask = [...taskList];
        newTask.splice(index, 1);
        setTaskList(newTask);
    }

  return (
      <>
          <div className='todoContainer'>
              <h2>TODO APP</h2>
              <AddTask addTask={ handleAddTask} />
              <div className='taskContainer'>
                  {taskList.map((item,index) => (
                      <ListTasks key={index} task={item} removetask={handleRemoveTask} index={ index} />
                  ))}
              
              </div>
              
          </div>
      </>
  )
}

export default ToDo