import Hero from "../components/Hero/Hero.module";
import Movies from "../components/Movies/Movies.module";

function Home() {


  /**
   * Mengangkat state movies: lifting state
   */

  return(
    <div>
      <Hero />
      <Movies title="Latest Movies" />
    </div>
  );
}

export default Home;