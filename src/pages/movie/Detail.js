import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import Movies from "../../components/Movies/Movies.module";
import DetailMovie from "../../components/DetailMovie";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function Detail() {
  const params = useParams();

  // Membuat state movies
  const [movies, setMovies] = useState([]);  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  async function getDetail() {
        // Fetch data dari Axios
        const response = await axios(ENDPOINTS.DETAIL(params.id));

        // Simpan data ke state movies
        setMovies(response.data.results);
  }

  return (
    <>
      <DetailMovie />
      <Movies movies={movies} title="Recommendations"/>       
    </>
  );
}

export default Detail