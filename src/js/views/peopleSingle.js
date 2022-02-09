import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Row } from "react-bootstrap";



export const Peoplesingle = ()=> 
{
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	useEffect(() => {
		console.log(!store.character.length)
		if (!store.character.length){
			actions.getCharacter(params.theid);
		}
	}, []);

	return(
	<>
		<div className="jumbotron">
			<h1 className="display-4">Character Height: {store.character.height}</h1>
			<hr className="my-4" />
			<h2>Mass</h2>
			<p>{store.character.mass}</p>
			<p>Hair Color</p>
			<p>{store.character.hair_color}</p>
			

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>	
	</>
	);
}
