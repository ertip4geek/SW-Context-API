const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			character: [],
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