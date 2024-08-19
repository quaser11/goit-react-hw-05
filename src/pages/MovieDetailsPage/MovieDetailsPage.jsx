import {useState, useEffect, useRef, Suspense} from 'react'
import {Outlet, useParams, useLocation} from "react-router-dom";
import {getMovieDetail, getImage} from "../../utils/api-service.js";
import {Container, MovieDetail, Nav, Link} from './MovieDetailsPage.styled.js'

const MovieDetailsPage = () => {
    const {movieId} = useParams();
    const {state} = useLocation();
    const [movieData, setMovieData] = useState(null);
    const [image, setImage] = useState(null);
    const backUrl = useRef(state?.from ?? '/')

    useEffect(() => {
        getMovieDetail(movieId).then(res => setMovieData(res))
    }, [movieId])

    useEffect(() => {
        if (movieData) {
            setImage(getImage(movieData['poster_path'], 300))
        }
    }, [movieData]);

    if (movieData && image) {
        return <>
            <Link to={backUrl.current ?? '/'}>go back</Link>
            <Container>
                <div>
                    <img src={image} alt=''/>
                </div>
                <MovieDetail>
                    <h1>{movieData.title}</h1>
                    <p>User score: {Math.round(movieData['vote_average'] * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{movieData.overview}</p>
                    <h3>Genres</h3>
                    <ul>
                        {movieData.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                    </ul>
                </MovieDetail>
            </Container>
            <Nav>
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to='Cast'>Cast</Link>
                    </li>
                    <li>
                        <Link to='Reviews'>Reviews</Link>
                    </li>
                </ul>
            </Nav>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </>
    }
}

export default MovieDetailsPage