import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detail.css";



export const Planetsingle = ()=> 
{
	const { store, actions } = useContext(Context);
	const params = useParams();
	let pathImg = "https://www.lafinestradigital.com/wp-content/uploads/2011/09/starwars-planetes.jpg";
	
	useEffect(() => {
		console.log(!store.planet.length)
		if (!store.planet.length){
			actions.getPlanet(params.theid);
		}
	}, []);
	return(
		<>
			<div>
				<div className="jumbotron-fluid mx-5 my-5 d-flex flex-row">

					<div className="right-side d-inline-block">
						<h1 className="text-center warning" id="name">
							{store.planet.name}
						</h1>
						<h6 className="description mx-5 text-center text-monospace" id="fakeText">
							{" "}
							Lucas ipsum dolor sit amet maul grievous mustafar wampa organa yavin organa fett antilles
							tatooine. Biggs amidala kenobi antilles moff yavin solo darth greedo. Wookiee wicket darth
							jinn c-3p0. Bespin jinn k-3po coruscant darth baba calamari ahsoka. Vader yoda kamino moff
							lobot r2-d2 organa skywalker baba. Gonk c-3po yavin moff moff skywalker. Jinn darth binks
							hutt coruscant dantooine moff binks. Moff darth darth dantooine tatooine moff skywalker.
							Skywalker calrissian organa moff. Mothma mace chewbacca maul skywalker anakin thrawn ahsoka
							antilles.
						</h6>
					</div>
				</div>
				<div className="divider bg-red" />
				{store.planet ? (
					<div className="row d-flex m-3">
						<div className="col-2 text-warning" id="planet">
							<strong>Name:</strong>
							<br />
							<br />
							{store.planet.name}
						</div>
						<div className="col-2 text-warning" id="planet">
							<strong><u>Diameter</u></strong>
							<br />
							<br />
							{store.planet.diameter}{" "}
						</div>
						<div className="col-2 text-warning" id="planet">
							<strong><u>Population</u></strong>
							<br />
							<br />
							{store.planet.population}{" "}
						</div>
						<div className="col-2 text-warning" id="planet">
							<strong><u>Climate</u></strong>
							<br />
							<br />
							{store.planet.climate}{" "}
						</div>
						<div className="col-2 text-warning" id="planet">
							<strong><u>Terrain </u></strong>
							<br />
							<br />
							{store.planet.terrain}{" "}
						</div>
						<div className="col-2 text-warning" id="planet">
							<strong>Orbital Period:</strong>
							<br />
							<br />
							{store.planet.orbital_period}{" "}
						</div>
						<div className="col-2 text-warning" id="planet">
							<strong>Rotation Period:</strong>
							<br />
							<br />
							{store.planet.rotation_period}{" "}
						</div>
					</div>
				) : (
					""
				)}
			</div>
				<div className="d-flex justify-content-center">
						<img
							className="image-fluid"
							src={pathImg}
						/>{" "}
				</div>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">Back home</span>
				</Link>
		</>
	);
}
