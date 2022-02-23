import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detail.css";



export const Starshipsingle = ()=> 
{
	const { store, actions } = useContext(Context);
	const params = useParams();
	let pathImg = "https://i.ytimg.com/vi/gnxd3t6iUiM/maxresdefault.jpg";
	
	useEffect(() => {
		console.log(!store.starship.length)
		if (!store.starship.length){
			actions.getStarship(params.theid);
		}
	}, []);
	return(
		<>
			<div>
				<div className="jumbotron-fluid mx-5 my-5 d-flex flex-row">

					<div className="right-side d-inline-block">
						<h1 className="text-center warning" id="name">
							{store.starship.name}
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
				{store.starship ? (
					<div className="row d-flex m-3">
						<div className="col-2 text-warning" id="starship">
							<strong>Name:</strong>
							<br />
							<br />
							{store.starship.name}
						</div>
						<div className="col-2 text-warning" id="starship">
							<strong><u>Model</u></strong>
							<br />
							<br />
							{store.starship.model}{" "}
						</div>
						<div className="col-2 text-warning" id="starship">
							<strong><u>Manufacturer</u></strong>
							<br />
							<br />
							{store.starship.manufacturer}{" "}
						</div>
						<div className="col-2 text-warning" id="starship">
							<strong><u>Cost in Credits</u></strong>
							<br />
							<br />
							{store.starship.cost_in_credits}{" "}
						</div>
						<div className="col-2 text-warning" id="starship">
							<strong><u>Crew</u></strong>
							<br />
							<br />
							{store.starship.crew}{" "}
						</div>
						<div className="col-2 text-warning" id="starship">
							<strong><u>Passengers</u></strong>
							<br />
							<br />
							{store.starship.passengers}{" "}
						</div>
						<div className="col-2 text-warning" id="starship">
							<strong>Class</strong>
							<br />
							<br />
							{store.starship.vehicle_class}{" "}
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
