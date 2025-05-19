import React from 'react'

const ListTasks = ({task,removetask,index}) => {
  return (
      <>
          <div className='taskList'>
              <ul>
                  <li>
                      <div className='taskName'>
                          {task.title}
                      </div>
                      <button onClick={()=>{removetask(index)}}>Delete</button>
                  </li>
              </ul>
        </div>
      </>
  )
}

export default ListTasks