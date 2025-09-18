import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
        <div className='px-5 py-3 text-3xl font-thin text-red-500 flex justify-between items-center bg-black '> 
            <div> Movie App </div>
            <div className='flex justify-between items-center gap-8'> 
                <Link to="/"> Home </Link>
                <Link to="/favorites"> Favorites </Link>
            </div>
        </div>
  )
}

export default Navbar