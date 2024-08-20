import {NavLink} from "react-router-dom";

const MovieList = ({movies, location}) => {

    const link = location.pathname === '/' ? 'movies' : location.pathname;

    return <ul>
        {movies.map(movie => (
            <li key={movie.id}>
                <NavLink to={`${link}/${movie.id}`} state={{from: location}}>{movie.title}</NavLink>
            </li>
        ))}
    </ul>
}

export default MovieList