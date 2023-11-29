import { useState } from "react"



function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen h-screen duration-200" 
    style={{backgroundColor:color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

    <div className="flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-2 py-2 border rounded-lg">

    <button className="outline-none px-4 py1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>

    <button className="outline-none px-4 py1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"blue"}}onClick={()=>setColor("blue")}>Blue</button>

    <button className="outline-none px-4 py1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"green"}}onClick={()=>setColor("green")}>Green</button>

    <button className="outline-none px-4 py1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"purple"}}onClick={()=>setColor("purple")}>Purple</button>

    <button className="outline-none px-4 py1 rounded-full text-black shadow-lg"
    style={{backgroundColor:"yellow"}}onClick={()=>setColor("yellow")}>Yellow</button>
  



    </div>
    </div>
    </div>
    </>
  )
}

export default App
