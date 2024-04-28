import React from 'react'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo,updateTodo } from '../app/TodoSlice';


function Todos() {
const todos= useSelector((state)=>(state.todos))   
const dispatch=useDispatch();
const [update,setUpdate]=useState(false);
const [id,setID]=useState();
const remove =(id)=>{
    
    dispatch(removeTodo(id))
} 

const updateHandler=(id)=>{
    setUpdate(true)
    console.log('trying Id is ', id)
    setID(id);

}

const [input,setInput]=useState(''); 


    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("input is",input)
        console.log('Id is ', id)
        dispatch(updateTodo({id:id,newText:input}));
        setInput('');
        setUpdate(false)

    }


  return (
   <>
   <h2> Todos are:</h2>
    {
       
      todos.map ((todo)=>(
        <div style={{ border: '2px solid green'}} key={todo.id}>
      
         {!update &&  (
  <>
    <h3>Todo ID : {todo.id}</h3>
    <h3>Todo : {todo.text}</h3>
    <button onClick={() => remove(todo.id)} style={{ fontSize: '20px', backgroundColor: 'red' }}>X</button>
    <button style={{ backgroundColor: 'pink' }} onClick={() => updateHandler(todo.id)}>UPDATE</button>
  </>
)}

{
    update && (
        <form onSubmit={submitHandler}>
    <input type='text' placeholder='Enter Todo' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    <input id="submitButton" type="submit" value="Submit"/>
    </form>
    )
}

</div>
      ))
    }

    
   </>
  )
}

export default Todos