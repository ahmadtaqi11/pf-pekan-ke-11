import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies.module";
import Hero from "../../components/Hero/Hero.module";
import ENDPOINTS from "../../components/utils/constants/endpoints"; 

function NowPlaying() {
  // Membuat state movies
  const [movies, setMovies] = useState([]);  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getNowPlaying();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getNowPlaying() {
        // Fetch data dari Axios
        const response = await axios(ENDPOINTS.NOWPLAYING);

        // Simpan data ke state movies
        setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies movies={movies} title="Now Playing" />       
    </>
  );
}

export default NowPlaying