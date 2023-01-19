import React, {useState, useEffect} from "react";



//create your first component
const Home = () => {

	
	const [tarea,setTarea] = useState("");
	const [lista,setLista] = useState([]);


	/*const listItems = list.map((item) =>
	<li key={item.toString()}>
	{item}
  </li>
	);*/


	function crearUsuario(){
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/jairtorres`,
		{method: 'POST', 
		headers: {
			'Content-Type': 'application/json'},
		body: JSON.stringify([])
	  })
		.then((response)=>response.json())
		.then((data)=>console.log(data))
	}


	function agregarTarea(e) {
		e.preventDefault()
// {label: 'sample task', done: false}
		// setLista([...lista, {tarea}]);
		setLista(lista.concat({label: tarea, done: false}))
		setTarea("")
	}

	const borrarTarea = (indexItem) => {
		setLista((prevState) =>
		  prevState.filter((listaItems, index) => index !== indexItem)
		);
	  };

	function obtenerLista(){
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/jairtorres`,
		{method: 'GET', 
		
	  })
		.then((response)=>response.json())
		.then((data)=>setLista(data))
	}

	function borrarLista(){
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/jairtorres`,
		{method: 'DELETE', 
		headers: {
			'Content-Type': 'application/json'}
	  })
		.then((response)=>response.json())
		.then((data)=>{
			console.log(data.result)
			if (data.result === "ok"){
				setLista([])
			}
		})
		
	}

	function actualizar(){
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/jairtorres`,
		{method: 'PUT', 
		headers: {
			'Content-Type': 'application/json'},
		body: JSON.stringify(lista)
	  })
		.then((response)=>response.json())
		.then((data)=>console.log(data))
	}

	
	useEffect (()=>{
		crearUsuario();
		obtenerLista()
	},[])

	useEffect (()=>{
		actualizar()
		},[lista])

	return (
		<>
		<div className="card container d-flex bg-light mt-3 md-w50">
		<h2 className="titulo m-auto p-2">Lista de tareas.</h2>
  			<div className="card-body">
  				<input type="text" className="input m-1 w-75" value={tarea} id="exampleInput" aria-describedby="inputHelp" onChange={(e)=>{setTarea(e.target.value)}} placeholder="Añadir una tarea."/>
				<button type="submit" className="btn btn-primary btn-sm" onClick={agregarTarea}>Agregar</button>
  			</div>
			<div className="to-do-list d-flex">
			  <ul>{lista.map((item, index) => (
        <li key={index}>
          {item.label}
          <button className="btn" onClick={() => borrarTarea(index)}>
            <i className="fas fa-trash-alt" />
          </button>
        </li>
      ))}</ul>
			</div>
			<div className="delete-lista d-flex justify-content-center mt-3 md-w50 mb-2">
			<button type="submit" className="btn btn-danger btn-sm" onClick={borrarLista}>Delete list</button>
			</div>
		</div>
		
		</>
	);
};

export default Home;
