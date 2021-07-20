import {useState} from "react";
import useCount from "./useCount";


const Test = () => {
  const[count,setCount]=useState(0);
  useCount(count);
  console.log("Hello outside");

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={
        ()=> setCount(count + 1)
      }><h2>Click Me 😊</h2></button>
    </div> 
  );
}


export default Test;