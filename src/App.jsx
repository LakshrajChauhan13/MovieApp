import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favorites from '../pages/Favorites'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div>
    <Navbar />
    <Routes>
      <Route path='/MovieApp' element={<Home />} />
      <Route path='/MovieApp/favorites' element={<Favorites />} />
    </Routes>
   
    {/* <MovieCard /> */}
   </div>
    </>
  )
}

export default App
