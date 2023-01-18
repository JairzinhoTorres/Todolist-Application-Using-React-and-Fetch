
import React,{useEffect} from "react";
import { Link, useParams} from "react-router-dom";


export const Planets = ({ nombrePlaneta, diametroPlaneta, climaPlaneta,id}) => {
    return ( 
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://funkilandia.com/wp-content/uploads/2022/08/funkilandia_img_285.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title"> {nombrePlaneta} </h5>
        <p className="card-text"> {diametroPlaneta} </p>
        <p className="card-text"> {climaPlaneta} </p>
        <p className="card-text mt-2"> 30, 00 US$. </p>
        <Link to={"/viewPlanets/"+id} className="btn btn-primary"> Detalles del planeta:{id}</Link>
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

