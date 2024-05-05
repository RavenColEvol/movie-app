import { API_URL, API_KEY } from '../../config'

export const fetchMovies = async (pageNumber: number, search?: string) => {
    let endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`;
    if (search !== "") {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${search}&language=en-US&page=${pageNumber}`;
    }
    const res = await fetch(endpoint);
    const json = await res.json();
    return json;
}

export const fetchByCategory = async (category:string) => {
    const endpoint = `${API_URL}movie/${category}?api_key=${API_KEY}&language=en-US&page=1`;
    const res = await fetch(endpoint);
    const json = await res.json();
    return json.results.slice(0, 5);
}

export const fetchMovieById = async (movie_id:string) => {
    const endpoint = `${API_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
    const res = await fetch(endpoint);
    const json = await res.json();
    return json;
}


export const fetchSimilarMovieById = async (movie_id:string) => {
    const endpoint = `${API_URL}movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    const res = await fetch(endpoint);
    const json = await res.json();
    return json.results;
}
