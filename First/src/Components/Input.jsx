import React, { useState } from 'react'
import {useDispatch } from 'react-redux';
import { addTodo  } from '../app/TodoSlice';



function Input() {
    const [input,setInput]=useState(''); 
    const dispatch=useDispatch();

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("input is",input)
        dispatch(addTodo(input));
        setInput('');
    }
  return (
    <form onSubmit={submitHandler}>
    <input type='text' placeholder='Enter Todo' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    <input id="submitButton" type="submit" value="Submit"/>
  
    </form>
  )
}

export default Input