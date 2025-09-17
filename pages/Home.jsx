import React, { useEffect } from 'react'
import { useState } from 'react'
import MovieCard from '../src/components/MovieCard'
import { getPopularMovies, searchMovies } from '../src/services/api'


const Home = () => {
    const [SearchQuery, setSearchQuery] = useState('')
    const [Movies, setMovies] = useState([]);
    const [Error, setError] = useState(null);    
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
     const loadPopularMovies = async () => {
        try {
            const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
        } catch (err) {
            console.log(err);
            setError("failed to load moviess...")
        }
        finally{ 
            setLoading(false)
        }
    } 

    loadPopularMovies()

    }, [])
    
    // const Movies = [
    //     {id:2 , title: "Terminator", release_date:"1980"} ,
    //     {id:1 , title: "John Wick", release_date:"2020"} ,
    //     {id:3 , title: "The Matrix", release_date:"2004"} ,
    // ];

    const handleSearch = async (e) => {
        e.preventDefault()
        if(!SearchQuery.trim()) return
        if(Loading) return
        setLoading(true)
        
        try {
            const searchResults = await searchMovies(SearchQuery)
            setMovies(searchResults)
        } catch(err){
            console.log(err);
            setError("Failed to load the movies...")
        } finally{
            setLoading(false)
        }
    }

  return (
    <div>
    <div className='flex justify-center items-center mt-2'>
        <form className=' w-120 h-10 flex justify-between mt-5' onSubmit={(e)=>{handleSearch(e)}}>
            <input 
            type="text"
            value={SearchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            placeholder='Search Movies....'
            className='h-full w-[70%] border p-2 rounded border-gray-500 text-gray-500 ' />
            <button className='w-[28%] h-full rounded bg-red-500 text-white font-bold text-md' > Search </button>
        </form>
    </div>
 
    {Error && <div className='text-3xl font-bold text-white absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> {Error} </div> }

    {Loading ?
    (<div className='text-6xl font-bold text-white absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> loading... </div>) :
    (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-10'>
    {Movies.map(function(e,idx){
        return <MovieCard movie={e} key={idx} />
    })}
    </div>
    ) }

    </div>
  )
}

export default Home