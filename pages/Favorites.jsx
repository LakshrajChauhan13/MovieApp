import React from 'react'

const Favorites = () => {
  return (
    <div className='relative'>
        <div className='flex flex-col justify-center items-center h-50 w-100 bg-[#1C1C1C] rounded-2xl absolute top-50 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <h1 className='text-red-500 font-extrabold text-2xl text-outline-black'> No Favorites Movies Yet </h1>
        <h2 className=' text-white font-thin'> Start adding movies to your Favorites for easy access</h2>
        </div>
    </div>
  )
}

export default Favorites