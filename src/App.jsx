import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router } from './router'
import { RouterProvider } from 'react-router-dom'

function App() {
  const router = Router()

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
