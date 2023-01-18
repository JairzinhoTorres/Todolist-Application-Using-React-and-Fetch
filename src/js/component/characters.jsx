
import React,{useParams} from "react";
// import { Link } from "ract-router-dom";
export const Characters = ({ nombrePersonaje, generoPersonaje,ColorOjosPersonaje }) => {

const params= useParams();

function obtenerInfoPersonajes() {
    fetch("https://swapi.dev/api/people/"+params.theid)
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results))
      .catch((err) => console.error(err));
  }
useEffect(() => {
    obtenerInfoPersonajes
},[])
   

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://funkilandia.com/wp-content/uploads/2022/08/funkilandia_img_285.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title"> {nombrePersonaje} </h5>
        <p className="card-title"> {generoPersonaje} </p>
        <p className="card-title">{ColorOjosPersonaje}</p>
        <p className="card-text mt-2"> 15, 00 US$. </p>
        <button> Learn More:{params.theid} </button>
        <a
          href="https://www.funko.com/search?term=one%20piece"
          className="btn  bg-warning text-dark border border-0 mt-3"
        >
          <i className="fa fa-heart"> </i>
        </a>
      </div>
    </div>
  );
};


