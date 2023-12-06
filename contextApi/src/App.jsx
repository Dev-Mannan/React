import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1 className='text-3xl font-bold bg-black text-white text-center p-7'>Context API </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
