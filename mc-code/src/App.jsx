import { useState } from 'react'
import './App.css'
import CountDownTimer from './question/CountDownTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CountDownTimer/>
       
    </>
  )
}

export default App
