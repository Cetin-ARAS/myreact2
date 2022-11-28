import React,{useState,useEffect} from 'react'
import "./App.css";
function App () {
  
  const [count,setCount]=useState(0);

  useEffect(()=>{
  console.log(count)
  })



  return (
    <div className='App'>
      <button onClick={()=>{setCount(count+1)}}>Arttır</button>

    </div>
  );
}

export default App;

