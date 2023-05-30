import { useState } from 'react'
import './App.css'
import UpdatedClickCounter from './components/ClickCounter'
import UpdatedHoverCounter from './components/HoverCounter'

function App() {


  return (
    <>
      <UpdatedClickCounter count={5}/>
      <UpdatedHoverCounter count={0}/>
    </>
  )
}

export default App
