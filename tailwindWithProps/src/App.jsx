import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Cards from './component/Cards'

function App() {
  const [color , setColor] = useState("black")

  return (
  
      <div className='h-screen w-screen p-10 ' style={{backgroundColor: color}}>

        <div className='h-16 w-[30rem] bg-white rounded-full mx-auto flex items-center m-3 p-5 gap-3  '>
                 <button className='h-7 w-20 bg-purple-300 text-white flex items-center  justify-center outline-none' style={{backgroundColor:"purple"}} onClick={() => setColor("purple")}>Purple</button>
                 <button className='h-7 w-20 bg-blue-300 text-white flex items-center  justify-center' style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>blue</button>
                 <button className='h-7 w-20 bg-red-300 text-white flex items-center  justify-center' style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>
                 <button className='h-7 w-20 bg-yellow-300 text-white flex items-center  justify-center ' style={{backgroundColor:"yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
                 <button className='h-7 w-20 bg-green-300 text-white flex items-center  justify-center' style={{backgroundColor:"green"}} onClick={() => setColor("green")}>Green</button>
        </div>
           
      </div>

      

  
  )
}

export default App
