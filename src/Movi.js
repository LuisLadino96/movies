export default function Movi(props) {

    return(
        <div className="movie-item-style-2">
            <img src={props.img} alt />
            <div className="mv-item-infor">
              <h6><a href="moviesingle.html">
                {props.titulo}
                </a>
                </h6>
              <p>{props.calificacion} /10</p>
              <p>{props.descripcion}</p>
              <p>{props.duracion}    .     <span>MMPA: PG-13 </span>    .   {props.fecha}</p>
              <p>Director: <a href="#">{props.director}</a></p>
              <p>Stars: <a href="#">{props.actores}</a></p>
            </div>
          </div>
    )
}