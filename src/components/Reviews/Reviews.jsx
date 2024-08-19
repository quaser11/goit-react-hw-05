import {useParams} from "react-router-dom";
import {getMovieReviews} from '../../utils/api-service.js'
import {useEffect, useState} from "react";
const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        getMovieReviews(movieId).then(res => setReviews(res));
    }, [movieId]);

    if(reviews){
        return <>
            <ul>
                {reviews.length > 0 ? reviews.map(review => (
                    <li key={review.id}>
                        <h3>Author: {review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                )) : <div>We don`t have any reviews for this movie</div>}
            </ul>
        </>
    }
}

export default Reviews;