import { useEffect } from "react"
import { useState, useCallback , useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //refrence hook

  const passwordref = useRef(null)

  const generatePassword = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "@#$%&"
    }
    for (let i = 1; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)]
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordtoClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    alert("copied to clipboard")
  },[password])

  useEffect(() => {generatePassword()} , [length, numberAllowed, charAllowed, generatePassword])



  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-8 pt-6 pb-8 my-10 text-orange-500 bg-gray-800">Password Generator

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="w-full px-3 py-2 text-black-700 leading-tight focus:outline-none" placeholder="Password" readOnly
            ref={passwordref} />

          <button
            className="outline-none bg-blue-700 text-white px-2 py-0.5 shrink-0" onClick={copyPasswordtoClipboard}>Copy</button>

        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">

            <input type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)} />

            <label>Length: {length}</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)} />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)} />
            <label>Characters</label>
          </div>


        </div>


      </div>

    </>
  )
}

export default App
