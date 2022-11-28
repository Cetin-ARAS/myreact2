import React,{useState,useEffect} from 'react'
import "./App.css";
function App () {
  
  const [count,setCount]=useState(0);
  const [title,setTitle]=useState("Effect");

  useEffect(()=>{
  console.log(count)
  },[title]);



  return (
    <div className='App'>
      <button onClick={()=>{setCount(count+1)}}>Arttır</button>
      <p>{title}</p>

    </div>
  );
}

export default App;

