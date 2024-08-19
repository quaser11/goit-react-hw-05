import axios from 'axios'

const BASE_KEY = '35f01270f5d4254df29541f21ae51a0c'
const BASE_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWYwMTI3MGY1ZDQyNTRkZjI5NTQxZjIxYWU1MWEwYyIsIm5iZiI6MTcyMzg5ODA5OC44MTgwMTUsInN1YiI6IjY2YzA5N2ZkNzkwN2EwODllOTE2YThlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NTZsMRPUjzq5BsUx0-9W9AfDJB5pO3QFt1JJqX0mcF0'
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const options = {
    headers: {
        Authorization: `Bearer ${BASE_TOKEN}`,
    }
}

export const getTrendingToday = async (time) => {
    try {
        const res = await axios.get(`/trending/movie/${time}`, options)
        return res.data.results
    } catch (err) {
        return err.message
    }
}

export const getMovieDetail = async (movieId) => {
    try {
        const res = await axios.get(`/movie/${movieId}`, options)
        return res.data
    } catch (err) {
        return err.message
    }
}

export const getImage = (moviePath, width) => {
    return `http://image.tmdb.org/t/p/w${width}${moviePath}`
}

export const getMovieReviews = async (movieId) => {
    try {
        const res = await axios.get(`/movie/${movieId}/reviews`, options)
        return res.data.results
    } catch (err) {
        return err.message
    }
}

export const getMovieCast = async (movieId) => {
    try {
        const res = await axios.get(`/movie/${movieId}/credits`, options)
        return res.data.cast
    } catch (err) {
        return err.message
    }
}

export const searchMovie = async (query) => {
    try {
        const res = await axios.get(`/search/movie?query=${query}`, options)
        return res.data.results
    } catch (err) {
        return err.message
    }
}