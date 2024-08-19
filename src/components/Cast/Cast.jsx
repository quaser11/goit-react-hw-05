import {useParams} from "react-router-dom";
import {getMovieCast, getImage} from "../../utils/api-service.js";
import {useEffect, useState} from "react";

const Cast = () => {
    const {movieId} = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        getMovieCast(movieId).then(res => setCast(res));
    }, [movieId]);

    if(cast){
        return <>
            <ul>
                {cast.map(actor => {
                    return <li key={actor.id}>
                        <img src={getImage(actor['profile_path'], 185)} alt=""/>
                        <p>{actor.name}</p>
                    </li>
                })}
            </ul>
        </>
    }
}

export default Cast;