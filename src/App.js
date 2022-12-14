import React,{useState,useEffect} from 'react'
import "./App.css";
function App () {

  const [timer,setTimer]=useState(5);

  useEffect(()=>{
    if(timer!==0){
   const interval=setInterval(() => {
    setTimer(timer-1)
   },1000);
   return ()=>clearInterval(interval);  //? buradaDidUnMount yaptık
  }
  // document.title=timer;

  },[timer])



  return (
    <div className='App'>
     <div style={{height:"250px",width:"250px",backgroundColor:"blue",borderRadius:"250px",color:"white",fontSize:"60px",margin:"10px auto",lineHeight:"250px"}}>{timer}</div>

    </div>
  );
}

export default App;

