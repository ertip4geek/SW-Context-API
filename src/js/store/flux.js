const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			character: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			getPeople: () => {
					fetch("https://www.swapi.tech/api/people/")
					.then(response => {
						if (!response.ok) {
						throw new Error("not loading");
						}
						return response.json();
						})
					.then(data => {
						setStore({people: data.results});
						// console.log("people", data)
					})
					.catch(error => console.error("[ERROR]", error));
			},
			getCharacter: id => {
				const endpoint = `https://swapi.dev/api/people/${id}`;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ character: data }))
					.catch(err => err);
			},		
		}
	}	
};


export default getState;