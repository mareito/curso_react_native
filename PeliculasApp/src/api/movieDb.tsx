import axios  from "axios";

const movieDbUrl = "https://api.themoviedb.org/3/movie";
const movieDb = axios.create({
    baseURL: movieDbUrl,
    params: {
        api_key : '434e1e2de734ff090ab43925f768db57',
        language : 'es-ES'
    }
})


export default movieDb;
