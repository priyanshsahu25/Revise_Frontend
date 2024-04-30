
import './App.css'
import { IncreaseCount,DeccreaseCount,updateCounter } from './app/counterSlices';
import { useSelector, useDispatch } from 'react-redux';



function App() {

const dispatch=useDispatch()
const count= useSelector((state)=>state.count);
const counter= useSelector((state)=>state.counter);
  return (
    <>
     <div>Counter is :{count}</div>
     <input type='number' value={counter}  onChange={(e)=>dispatch(updateCounter(e.target.value))}/>
     <button onClick={()=>dispatch(IncreaseCount(counter))}>Increase</button>
     <button onClick={()=>dispatch(DeccreaseCount(counter))}>Decrease</button>
    </>
  )
}

export default App
