import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detail.css";



export const Peoplesingle = ()=> 
{
	const { store, actions } = useContext(Context);
	const params = useParams();
	let pathImg = "https://i.blogs.es/cc0667/force-awakens/1366_2000.jpg";
	
	useEffect(() => {
		console.log(!store.character.length)
		if (!store.character.length){
			actions.getCharacter(params.theid);
		}
	}, []);
	return(
		<>
			<div>
				<div className="jumbotron-fluid mx-5 my-5 d-flex flex-row">

					<div className="right-side d-inline-block">
						<h1 className="text-center warning" id="name">
							{store.character.name}
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
				{store.character ? (
					<div className="row d-flex m-3">
						<div className="col-2 text-warning" id="characters">
							<strong><u>Name</u></strong>
							<br />
							<br />
							{store.character.name}
						</div>
						<div className="col-2 text-warning" id="characters">
							<strong><u>Birth Year</u></strong>
							<br />
							<br />
							{store.character.birth_year}{" "}
						</div>
						<div className="col-2 text-warning" id="characters">
							<strong><u>Gender</u></strong>
							<br />
							<br />
							{store.character.gender}{" "}
						</div>
						<div className="col-2 text-warning" id="characters">
							<strong><u>Height</u></strong>
							<br />
							<br />
							{store.character.height}{" "}
						</div>
						<div className="col-2 text-warning" id="characters">
							<strong><u>Skin Color</u></strong>
							<br />
							<br />
							{store.character.skin_color}{" "}
						</div>
						<div className="col-2 text-warning" id="characters">
							<strong><u>Eye Color</u></strong>
							<br />
							<br />
							{store.character.eye_color}{" "}
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
