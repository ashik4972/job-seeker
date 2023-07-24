import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
      <Route path='*' element={<Login />} />
      <Route path='/home' element={<Navbar/>} />
    
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App