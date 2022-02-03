const getState = ({ getStore, getActions, setStore }) => {
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
						console.log("people", data)
						console.log(data)
					})
					.catch();
			},
			getCharacter: () => {
				fetch("https://www.swapi.dev/api/people/1")
				.then(response => {
					if (!response.ok) {
					throw new Error("not loading");
					}
					return response.json();
					})
				.then(data => {
					setStore({character: data.results});
					console.log("character", data)
					console.log(data)
				})
				.catch();
			},
		}
	}	
};


export default getState;