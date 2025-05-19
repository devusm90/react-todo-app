import React, { useState } from 'react'
import './todo.css'

const AddTask = ({addTask}) => {
  const [value, setValue] = useState("");
  const handleTask = () => {
    addTask(value);
    setValue("");
      
  }
  return (
      <>
          <div className='inputContainer'>
        <input
          type='text'
          placeholder='Add new task'
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
          <button onClick={handleTask}>ADD</button>
          </div>
          
      </>
  )
}

export default AddTask