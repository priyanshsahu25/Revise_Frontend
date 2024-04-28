import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[]
}

const TodoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo: (state,action)=>{
              const todo={
                id:nanoid(),
                text:action.payload
              }
            //   console.log(todo);
              state.todos.push(todo);  
        },

        updateTodo:(state,action)=>{
            console.log(action.payload);
                state.todos=state.todos.map((todo)=>(
                    action.payload.id===todo.id ? {...todo,text:action.payload.newText} : todo
                ))
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>(
                todo.id!==action.payload
            ))
            
        }
    }
});


export const {addTodo,removeTodo,updateTodo} =TodoSlice.actions

export default TodoSlice.reducer