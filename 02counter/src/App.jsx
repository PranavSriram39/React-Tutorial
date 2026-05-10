import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() 
{
 let [counter,pranavCounter] =  useState(15)
 
 // let counter = 15 

  const addValue =() =>
 //{
//     //counter = counter+1
//     pranavCounter(prev => Math.min(prev +1,20))
//     console.log("cliked",counter);
//   }
{
setCounter(prevCounter => prevCounter + 1)
setCounter(prevCounter => prevCounter + 1)
setCounter(prevCounter => prevCounter + 1)
setCounter(prevCounter => prevCounter + 1)
}
  const removeValue=() =>
  {
    pranavCounter(prev => Math.max(prev -1 ,0))
  }

  return (
    <>
      <h1> Chai aur react </h1>
      <h2> Counter calue :5</h2>
      <button 
      onClick={addValue}> 
      add value{counter} </button>
      <br/>
      <button
       onClick={removeValue}
       > remove value{counter}</button>

       <p> footer:{counter}</p>
    </>
  )
}

export default App
