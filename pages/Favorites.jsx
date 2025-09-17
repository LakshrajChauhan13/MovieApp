import React, { useContext } from 'react'
import { MoviesContext } from '../src/context/MovieContext'
import MovieCard from '../src/components/MovieCard'

const Favorites = () => {

  const {favorites} = useContext(MoviesContext)

  return (
    <>
    { favorites.length > 0 ?
    ( <div className='text-4xl text-red-600 font-sans font-bold underline pt-2 pl-3'> Favorite Collection <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-10'> 
    {favorites.map(function(e,idx){
        return <MovieCard movie={e} key={idx} />
    })}
    </div> </div>
    ):
     ( <div className='relative'>
        <div className='flex flex-col justify-center items-center h-50 w-100 bg-[#1C1C1C] rounded-2xl absolute top-50 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <h1 className='text-red-500 font-extrabold text-xl text-outline-black'> No Favorites Movies Yet </h1>
        <h2 className=' text-white font-thin'> Start adding movies to your Favorites for easy access</h2>
        </div>
    </div>)
     } 
   
    </>
  )
}

export default Favorites