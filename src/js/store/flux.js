const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
	  personajes:[],
	  vehiculos:[],
	  planetas:[]
    },
    actions: {
      // Use getActions to call a function within a fuction
	  
    //   exampleFunction: () => {
    //     getActions().changeColor(0, "green");
	// Este es el fetch de personajes
    //   },
	  obtenerInfoPersonajes: () => {
        fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => setStore({personajes:data.results}))
      .catch((err) => console.error(err));
      },

// Este es el fetch de vehiculos
		obtenerInfoVehiculos: () => {
		fetch("https://swapi.dev/api/vehicles/")
		.then((res) => res.json())
		.then((data) => setStore({vehiculos:data.results}))
		.catch((err) => console.error(err));
      },

	  // Este es el fetch de los planetas
	  obtenerInfoPlanetas: () => {
		fetch("https://swapi.dev/api/planets/")
		.then((res) => res.json())
		.then((data) => setStore({planetas:data.results}))
		.catch((err) => console.error(err));
      },
	  
      loadSomeData: () => {
        /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({
          demo: demo,
        });
      },
    },
  };
};

export default getState;
