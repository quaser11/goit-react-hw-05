import {getTrendingToday} from "../../utils/api-service.js";
import {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";

const HomePage = () => {
    const [trendingMovie, setTrendingMovie] = useState(null);
    const location = useLocation();
    useEffect(() => {
     getTrendingToday('day').then(res => setTrendingMovie(res));
    }, []);

    return <>
        <ul>
            {trendingMovie && trendingMovie.map(movie => (
                <li key={movie.id}>
                    <NavLink to={`movies/${movie.id}`} state={{from: location}}>{movie.title}</NavLink>
                </li>
            ))}
        </ul>
    </>
}

export default HomePage;