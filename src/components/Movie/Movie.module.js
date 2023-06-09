import StyledMovie from "./Movie.styled";

function Movie(props) {
    // Destructing object props
    const { movie } = props;

    return(
        <StyledMovie>
            <img src={movie.poster || `https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            <h3>{movie.title}</h3>
            <p>{movie.year || movie.release_date.slice(0, 4)}</p>  
        </StyledMovie>
    );
}

export default Movie;