import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Button from "../ui/Button";
import axios from "axios";
import StyledDetailMovie from "./DetailMovie.styled";
import ENDPOINTS from "../utils/constants/endpoints";


function DetailMovie () {
    /**
     * TODO:
     * - Ambil ID dari parameter URL
     * - Fetch detail movie by id
     */
    const params = useParams();
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getDetailMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    async function getDetailMovie(){
        const response = await axios(ENDPOINTS.TRAILER(params.id));

        setMovie(response.data);
    }

    return(
        <StyledDetailMovie>
                <div className="info">
                    <h2>{movie.title}</h2>
                    <h3>{genres}</h3>
                    <p>{movie.overview}</p>
                    <Button variant="primary" size="lg" as="a" href={(trailer)} target="_blank">Watch</Button>
                </div>
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
                </div >    
        </StyledDetailMovie> 
    );
}

export default DetailMovie;  