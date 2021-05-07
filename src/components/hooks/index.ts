import { API_URL, API_KEY } from '../../config'

export const fetchByCategory = async (category:string) => {
    const endpoint = `${API_URL}movie/${category}?api_key=${API_KEY}&language=en-US&page=1`;
    const res = await fetch(endpoint);
    const json = await res.json();
    return json.results.slice(0, 5);
}

export const fetchMovieById = async (movie_id:string) => {
    let endpoint = `${API_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
    let res = await fetch(endpoint);
    let json = await res.json();
    return json;
}


export const fetchSimilarMovieById = async (movie_id:string) => {
    let endpoint = `${API_URL}movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    let res = await fetch(endpoint);
    let json = await res.json();
    return json.results;
}

// export const fetchByQuery = async ()