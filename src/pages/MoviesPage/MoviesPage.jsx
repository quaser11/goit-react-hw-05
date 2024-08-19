import {useSearchParams, Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {searchMovie} from "../../utils/api-service.js";

const MoviePage = () => {
    const [params, setParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const query = params.get('query');
        if (query) {
            searchMovie(query).then(res => setMovies(res));
        }
    }, [params]);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        const input = e.currentTarget.elements[0]

        const query = input.value !== '' ? {query: input.value} : '';
        setParams(query);
    }

    if (!movies) {
        return <>
            <form onSubmit={onHandleSubmit}>
                <input type="text" name='search'/>
                <button type='submit'>Search</button>
            </form>
        </>
    } else {
        return <>
            <form onSubmit={onHandleSubmit}>
                <input type="text" name='search'/>
                <button type='submit'>Search</button>
            </form>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`${movie.id}`} state={{from: location}}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    }
}

export default MoviePage