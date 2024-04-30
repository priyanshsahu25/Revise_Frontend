import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0,
    counter:0,   
}
const counterSlice= createSlice({
    name:"count",
    initialState,
    reducers:{
        IncreaseCount: (state,action)=>{
            state.count= state.count+ Number(action.payload);
        },
        DeccreaseCount: (state,action)=>{
            state.count= state.count -Number(action.payload);
        },
        updateCounter:(state,action)=>{
            state.counter=action.payload;
        }
    }
})

export const {IncreaseCount,DeccreaseCount,updateCounter} = counterSlice.actions
export default counterSlice.reducer;