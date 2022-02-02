
import './App.css';
import Movi from './Movi';
import moviesJson from './movies.json'
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import { useState } from 'react/cjs/react.production.min';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);

  let movies = moviesJson;

  movies = movies.slice((paginaActual - 1) *5, paginaActual*5 );
  
  return (
    <PageWrapper>
      {movies.map(movie =>
        <Movi titulo={movie.titulo} calificacion={movie.calificacion} director={movie.director} actores={movie.actores} fecha={movie.fecha} duracion={movie.duracion} img={movie.img}>
          {movie.descripcion}
        </Movi>
        )}
    <Paginacion pagina={paginaActual} total={4}onChange={(pagina) =>{
      setPaginaActual(pagina)
    }}/>

    </PageWrapper>

   
  );
}

export default App;
