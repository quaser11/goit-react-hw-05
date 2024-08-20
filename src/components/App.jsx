import {Routes, Route} from "react-router-dom";
import {lazy} from "react";
import Navigation from "./Navigation/Navigation.jsx"

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage.jsx"));
const Reviews = lazy(() => import("./Reviews/Reviews.jsx"));
const Cast = lazy(() => import("./Cast/Cast.jsx"));

function App() {
    return <>
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<HomePage/>}/>
                <Route path='movies' element={<MoviesPage/>}/>
                <Route path='movies/:movieId' element={<MovieDetailsPage/>}>
                    <Route path='reviews' element={<Reviews/>}/>
                    <Route path='cast' element={<Cast/>}/>
                </Route>
            </Route>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </>
}

export default App
