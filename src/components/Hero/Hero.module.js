/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";
import axios from "axios";
import ENDPOINTS from "../utils/constants/endpoints";

function Hero() {
    // Membuat state movies;
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`

    // async function fetchMovie() {
    //     // Melakukan side effect: fetch data movie (api);
    //     const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");

    //     const data = await response.json();

    //     // Set  movie dengan data movie hasil fetch 
    //     setMovie(data);
    // }

    useEffect(getDetailMovie, []);
    // Params kedua array kosong: agar useEffect tidak looping (fetch sekali).

    // Mendapatkan satu data dari trending movies
    async function getTrendingMovies() {
        const response = await axios(ENDPOINTS.TRENDING);
        return response.data.results[Math.floor(Math.random() * 5)]; 
    }

    // Membuat fungsi untuk mendapatkan detail movie

    async function getDetailMovie() {
        const trendingMovie = await getTrendingMovies();
        const id = trendingMovie.id;   

        // fetch detail movie by id
        const response = await axios(ENDPOINTS.TRAILER(id));

        setMovie(response.data)
    }

    return(
        <StyledHero>
            <section>
                <div className="info">
                    <h2>{movie.title}</h2>
                    <h3>{genres}</h3>
                    <p>{movie.overview}</p>
                    <Button variant="primary" size="lg" as="a" href={trailer} target="_blank">Watch</Button>
                </div>
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
                </div>    
            </section>
        </StyledHero>            
    );
}

export default Hero;