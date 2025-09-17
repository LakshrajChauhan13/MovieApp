import React, { createContext, useEffect, useState } from 'react'

export const MoviesContext = createContext()

const MovieContext = ({children}) => {

    const [favorites, setfavorites] = useState([])

    useEffect(() => {
    const storedfavs = localStorage.getItem("favorites")
    if(storedfavs){
      setfavorites(JSON.parse(storedfavs))  
    }}, [])
    
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))               
    }, [favorites])

    const addTofavorites = (movies) => {
        setfavorites( prev => [...prev , movies])
    }

    const removeFromfavorites = (movieId) => {
        setfavorites( prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }
        
    const value = {
        favorites,
        addTofavorites,
        removeFromfavorites,
        isFavorite
    }

  return (
    <div>
        <MoviesContext.Provider value={value}>
        {children}
        </MoviesContext.Provider>
    </div>
  )
}

export default MovieContext