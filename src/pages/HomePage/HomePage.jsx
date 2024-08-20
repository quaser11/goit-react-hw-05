import {getTrendingToday} from "../../utils/api-service.js";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList.jsx";

const HomePage = () => {
    const [trendingMovie, setTrendingMovie] = useState(null);
    const location = useLocation();
    useEffect(() => {
     getTrendingToday('day').then(res => setTrendingMovie(res));
    }, []);

    return <>
        {trendingMovie && <MovieList movies={trendingMovie} location={location} />}
    </>
}

export default HomePage;