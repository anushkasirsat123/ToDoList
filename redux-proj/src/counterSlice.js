import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    value : 0,
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
                state.value = state.value + 1
        }
    }
});

export const {increment} = counterSlice.actions
export default counterSlice.reducer;