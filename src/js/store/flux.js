const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			planet:[],
			character: [],
			starship: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
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
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets?page=2&limit=9")
				.then(response => {
					if (!response.ok) {
					throw new Error("not loading");
					}
					return response.json();
					})
				.then(data => {
					setStore({planets: data.results});
					// console.log("planets", data)
				})
				.catch(error => console.error("[ERROR]", error));
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(response => {
					if (!response.ok) {
					throw new Error("not loading");
					}
					return response.json();
					})
				.then(data => {
					setStore({vehicles: data.results});
				})
				.catch(error => console.error("[ERROR]", error));
			},
			getPlanet: id => {
				const endpoint = `https://swapi.dev/api/planets/${id}`;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ planet: data }))
					.catch(err => err);
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
			getStarship: id => {
				const endpoint = `https://swapi.dev/api/people/${id}`;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ starship: data }))
					.catch(err => err);
			},		
			setFavorites: fav => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, fav] });
			},
			deleteFavorites: fav => {
				const store = getStore();
				console.log("fav", fav)
				setStore({ favorites: [...store.favorites.filter((x)=>x!=fav)] });
			},
		}
	}	
};


export default getState;