import React from 'react'
import Home from './Home.jsx'
import SingleMovie from './SingleMovie.jsx'
import Error from './Error.jsx'
import { Routes , Route} from 'react-router-dom'
import './app.css'
const App = () => {
  return (
    <>
   {/* we dont need BrowserRouter because i take BrowserRouter in main.jsx check */}
      
      <Routes>
        <Route path='/' element={<Home />}  /> 
        <Route path='/movie/:id' element={<SingleMovie />}  />    
        <Route path='*' element={<Error />}  />                                                                        
        </Routes>
    </>
  )
}

export default App
