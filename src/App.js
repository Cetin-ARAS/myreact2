import React from 'react'
import "./App.css";
import Icerik from './components/icerik'


export const TemaVerisi=React.createContext();
 function App() {

  const isim="Cetin Aras"
  return (
    <div className='App'>
      <TemaVerisi.Provider value={isim}>
      <Icerik/>
      </TemaVerisi.Provider>
  
    </div>
  )
}




export default App;

