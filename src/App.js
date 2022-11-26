import React,{useState} from 'react'
import "./App.css";
import Container from "./components/container";
 function App() {
  
  const [baslik,setBaslik]=useState("React Öğreniyorum")
  const numara=1923;
  return (
    <div className='App'>
      <Container title={baslik} number={numara}/>
      <button onClick={()=>{setBaslik("React öğreniyorum Baslığını Değiştirdim.")}}>Değiştir</button>
    </div>
  )
}




export default App;

