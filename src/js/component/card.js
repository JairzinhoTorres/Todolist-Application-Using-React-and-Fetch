
import React from "react";
const Card = () => {
	return (
        <div className="card col-3 mt-5 border border-0 " >
        <img src="https://funkilandia.com/wp-content/uploads/2022/08/funkilandia_img_285.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Funko Baby yoda</h5>
          <p className="card-text mt-2">15,00 US$.</p>
          <a href="https://www.funko.com/search?term=one%20piece" className="btn  bg-warning text-dark border border-0 mt-3"><i class="fa fa-heart"></i></a>
          
        </div>
      </div>
	);
};

export default Card;