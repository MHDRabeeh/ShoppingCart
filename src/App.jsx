import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import ShoppingCart from './Pages/ShoppingCart'

function App() {


  return (
    <>
      <div className=' mx-auto  h-[100vh] w-[98.7vw]'>
        <Routes>
         
          <Route path='/' element={ <Home />} />
          <Route path='/shoppingCart' element={ <ShoppingCart />} />

        </Routes>
      </div>

    </>
  )
}

export default App
