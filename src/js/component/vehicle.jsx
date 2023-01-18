
import React from "react";
// import { Link } from "ract-router-dom";

export const Vehicle = ({ modeloVehiculo,nombreVehiculo }) => {
    return ( 
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://funkilandia.com/wp-content/uploads/2022/08/funkilandia_img_285.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title"> {nombreVehiculo} </h5>
        <p className="card-text"> {modeloVehiculo} </p>
        <p className="card-text mt-2"> 20, 00 US$. </p>
        <button> Learn More </button>
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

