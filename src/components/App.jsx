import {Routes, Route} from "react-router-dom";
import {lazy, Suspense} from "react";

function App() {
    const Navigation = lazy(() => import("./Navigation/Navigation.jsx"));
    const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
    const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage.jsx"));
    const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage.jsx"));
    const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage.jsx"));
    const Reviews = lazy(() => import("./Reviews/Reviews.jsx"));
    const Cast = lazy(() => import("./Cast/Cast.jsx"));
    return <>

        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    </>
}

export default App
