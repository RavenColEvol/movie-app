import { API_URL, API_KEY } from '../../config'

export const fetchByCategory = async (category:string) => {
    const endpoint = `${API_URL}movie/${category}?api_key=${API_KEY}&language=en-US&page=1`;
    const res = await fetch(endpoint);
    const json = await res.json();
    return json.results.slice(0, 5);
}

// export const fetchByQuery = async ()