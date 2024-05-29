import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { generatePassWord } from "./SlicePass";
export function PassGenerator(){
    const count1=useSelector((state)=>state.counter.value1)
    const count2=useSelector((state)=>state.counter.value2)
    const dispatch=useDispatch()

    let handleInputChange = (event) => {
        state.value2(event.target.value);
      }; 

    return(
        <>
        <h1>{count1}</h1>
        <button onClick={()=>dispatch(generatePassWord())}>Generate</button>
        <input type="text" placeholder="Enter the Password"  className="border-solid border-2 ml-5" value={count2} onChange={handleInputChange} />
        <button className="ml-5" onClick={()=>dispatch(match())}>Submit</button>
        </>
    )
}
