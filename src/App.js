import React,{useState} from 'react'
import "./App.css";
import Container from "./components/container";
 function App() {
  
  const [baslik,setBaslık]=useState("React Öğreniyorum")
  const numara=1923;
  return (
    <div className='App'>
      <Container title={baslik} number={numara}/>
    </div>
  )
}




export default App;

