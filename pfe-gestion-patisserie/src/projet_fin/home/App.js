import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './Index'



export default function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
