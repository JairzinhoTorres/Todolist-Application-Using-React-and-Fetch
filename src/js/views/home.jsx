import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters.jsx";
import { Vehicle } from "../component/vehicle.jsx";
import { Planets } from "../component/planets.jsx";

export const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);
  const [planetas, setPlanetas] = useState([]);

  function obtenerInfoPersonajes() {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results))
      .catch((err) => console.error(err));
  }

  function obtenerInfoVehiculos() {
    fetch("https://swapi.dev/api/vehicles/")
      .then((res) => res.json())
      .then((data) => setVehiculos(data.results))
      .catch((err) => console.error(err));
  }
  function obtenerInfoPlanetas() {
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((data) => setPlanetas(data.results))
      .catch((err) => console.error(err));
  }
  

  useEffect(() => {
    obtenerInfoPersonajes();
	obtenerInfoVehiculos();
	obtenerInfoPlanetas();
  }, []);

  return (
    <div className="container text-center">
		<h1>PERSONAJES</h1>
		<div>
      {personajes.map((cadaPersonaje, index) => (
        <Characters
          key={index}
          nombrePersonaje={cadaPersonaje.name}
          generoPersonaje={cadaPersonaje.gender}
		  ColorOjosPersonaje={cadaPersonaje.eye_color}
        />
      ))}
	  </div>
	  <div>
	  <p>VEHICULOS</p>
      {vehiculos.map((cadaVehiculo, index) => (
        <Vehicle
          key={index}
          nombreVehiculo={cadaVehiculo.name}
          modeloVehiculo={cadaVehiculo.model}
        />
      ))}
	  </div>
<div>
<p>PLANETAS</p>
	  {planetas.map((cadaPlaneta, index) => (
        <Planets
          key={index}
          nombrePlaneta={cadaPlaneta.name}
          diametroPlaneta={cadaPlaneta.diameter}
		  climaPlaneta={cadaPlaneta.climate}
        />
      ))}
	  </div>
    </div>
  );
};
