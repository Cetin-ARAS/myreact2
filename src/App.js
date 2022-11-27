import React,{useState} from 'react'
import "./App.css";
import Icerik from './components/icerik'

const tema={
  dark:{
    color:"white",
    backgroundColor:"black"
  },
  light:{
    color:"black",
    backgroundColor:"white"
  }
};
export const TemaVerisi=React.createContext();
 function App() {
  const [mod,setMod]=useState(tema.dark);
  const isim="Cetin Aras"

  function değiştir(){
    if(tema.dark===mod){
      setMod(tema.light)
    }
    else{
      setMod(tema.dark)
    }
  }
  return (
    <div className='App'>
      <button onClick={değiştir}>
        {tema.dark===mod ? "Açık":"Koyu"}
      </button>
      <TemaVerisi.Provider value={isim}>
      <Icerik/>
      </TemaVerisi.Provider>
  
    </div>
  )
}




export default App;

