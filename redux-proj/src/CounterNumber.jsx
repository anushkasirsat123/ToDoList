import React from "react";
import { useSelector,useDispatch } from "react-redux";
import  {increment}  from "../src/counterSlice";
function CounterNumber(){
    
    let dispatch = useDispatch();
    let count = useSelector((state)=>state.counter.value)
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        </>
    )
}

export default CounterNumber