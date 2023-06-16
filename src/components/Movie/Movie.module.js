import StyledMovie from "./Movie.styled";
import { Link } from "react-router-dom";

function Movie(props) {
    // Destructing object props
    const { movie } = props;

    return(
        <StyledMovie>
            <img src={movie.poster || `https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            <Link to={`/movie/${movie.id}`}>
                <h3>{movie.title}</h3>
            </Link>
            <p>{movie.year || movie.release_date.slice(0, 4)}</p>  
        </StyledMovie>
    );
}

export default Movie;