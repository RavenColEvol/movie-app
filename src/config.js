import env from "react-dotenv";

export const API_URL='https://api.themoviedb.org/3/'
export const API_KEY= env.API_KEY

export const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

//Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE = 'w1280';

// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE = 'w342';

export const MINI_SIZE = 'w92'