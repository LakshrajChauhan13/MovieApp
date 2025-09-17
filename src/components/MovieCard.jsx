import React, { useContext } from "react";
import { MoviesContext } from "../context/MovieContext";
import { Heart } from "lucide-react"; // ✅ Import Heart icon

const MovieCard = ({ movie }) => {
  const { addTofavorites, removeFromfavorites, isFavorite } =
    useContext(MoviesContext);

  const favorite = isFavorite(movie.id);

  function liked(e) {
    e.preventDefault();
    if (favorite) removeFromfavorites(movie.id);
    else addTofavorites(movie);
  }
  return (
    <div>
      <div className="h-130 w-80 text-black rounded-xl overflow-hidden m-3 relative group ">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[100%] object-top object-cover transform transition-transform duration-500
              hover:scale-105 hover:brightness-50"
        />
        <button
          className="absolute right-5 top-4 invisible group-hover:visible"
          onClick={(e) => {
            liked(e);
          }}
        >
          <Heart
            size={23}
            className={`transform transition-all duration-300 ease-in-out ${favorite? "text-red-500 fill-red-500 scale-125": "text-white scale-100"}`}
          />
        </button>
        <div className="absolute px-2.5 py-1.5 font-semibold text-sm bg-gray-950/50 text-[#f8f8f8] h-15 bottom-0 w-full">
          <h2>{movie.title}</h2>
          <h3 className="mt-1">{movie.release_date}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
