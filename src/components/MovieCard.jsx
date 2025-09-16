import React from 'react'

const MovieCard = ({data}) => {

    function liked (e){
        alert('Added to favorites')
        console.log(e);
        
    }
  return (
    <div >
        <div className='h-130 w-80  text-black rounded-xl overflow-hidden m-3 relative group '>
        <img 
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} 
        alt={data.title} 
        className="w-full h-[90%] object-bottom object-cover"
      />
            <button className='absolute text-3xl right-5 top-2 text-white invisible group-hover:visible' onClick={(e)=>{liked(e)}}>♡</button>
            <div className='px-2.5 py-0.5 font-semibold text-sm bg-gray-950 text-[#f8f8f8] h-[10%]'> 
            <h2>{data.title}</h2>
            <h3 className='mt-1'>{data.release_date}</h3>
            </div>
        </div>
    </div>
  )
}

export default MovieCard