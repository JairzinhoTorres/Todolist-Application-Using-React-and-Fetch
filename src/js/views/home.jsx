import React, { useEffect, useState,useContext } from "react";
import "../../styles/home.css";
import { Characters } from "../component/cardCharacters.jsx";
import { Vehicle } from "../component/cardVehicle.jsx";
import { Planets } from "../component/cardPlanets.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
  const {store}=useContext(Context)
  // const [vehiculos, setVehiculos] = useState([]);
  // const [planetas, setPlanetas] = useState([]);

  // function obtenerInfoPersonajes() {
  //   fetch("https://swapi.dev/api/people/")
  //     .then((res) => res.json())
  //     .then((data) => setPersonajes(data.results))
  //     .catch((err) => console.error(err));
  // }

  // function obtenerInfoVehiculos() {
  //   fetch("https://swapi.dev/api/vehicles/")
  //     .then((res) => res.json())
  //     .then((data) => setVehiculos(data.results))
  //     .catch((err) => console.error(err));
  // }
  // function obtenerInfoPlanetas() {
  //   fetch("https://swapi.dev/api/planets/")
  //     .then((res) => res.json())
  //     .then((data) => setPlanetas(data.results))
  //     .catch((err) => console.error(err));
  // }
  

  // useEffect(() => {
  //   // obtenerInfoPersonajes();
	// // obtenerInfoVehiculos();
	// // obtenerInfoPlanetas();
  // }, []);

  return (
    <div className="container text-center">
		<h1>PERSONAJES</h1>
		<div>
      {store.personajes.map((cadaPersonaje, index) => (
        <Characters
          key={index}
          id={index+1}
          nombrePersonaje={cadaPersonaje.name}
          generoPersonaje={cadaPersonaje.gender}
		  ColorOjosPersonaje={cadaPersonaje.eye_color}
        />
      ))}
	  </div>
	  <div>
	  <p>VEHICULOS</p>
      {store.vehiculos.map((cadaVehiculo, index) => (
        <Vehicle
          key={index}
          id={index+1}
          nombreVehiculo={cadaVehiculo.name}
          modeloVehiculo={cadaVehiculo.model}
        />
      ))}
	  </div>
<div>
<p>PLANETAS</p>
	  {store.planetas.map((cadaPlaneta, index) => (
        <Planets
          key={index}
          id={index+1}
          nombrePlaneta={cadaPlaneta.name}
          diametroPlaneta={cadaPlaneta.diameter}
		  climaPlaneta={cadaPlaneta.climate}
        />
      ))}
	  </div>
    </div>
  );
};
