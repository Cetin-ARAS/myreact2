import React,{useState} from 'react'
import './App.css';


function App() {
  const [deger,setDeger]=useState(0)
  //?   function Azalt(){
    //?    setDeger(deger+1)
  //?}     böyle olursa onClick={Azalt} yazılır button kısmına
  
  const Azalt=()=>(setDeger(deger-2))
  return (
    <div className="App">
      <p><button onClick={()=>{setDeger(deger+1)}}>Arttır</button></p>
      <p>{deger}</p>
      <p><button onClick={Azalt}>Azalt</button></p>
     
    </div>
  );
}

export default App;
