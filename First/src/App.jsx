import { useState } from 'react'

import './App.css'
import Todos from './Components/Todos'
import Input from './Components/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Input/>
    {/* <h1>Count is : {count}</h1>
    <button onClick={()=>{setCount(count+1)}} >Increase</button>
    <button onClick={()=>{setCount(count-1)}} >Decrease</button> */}

    <Todos/>
    </>
  )
}

export default App
