import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Row } from "react-bootstrap";



export const Peoplesingle = ()=> {
	const { store, actions } = useContext(Context);
	const params = useParams();
	// useEffect(() => {
	// 	actions.getCharacter(params.theid);
	// }, []);
    <Row className="g-4">
        {store.character.map((character, i) => {
		return (
		<div className="jumbotron" key={i}>
			<h1 className="display-4">Character Height: {character.height}</h1>
			<hr className="my-4" />
			<strong>Mass</strong>
			<p>{character.mass}</p>
			<strong>Hair Color</strong>
			<p>{character.hair_color}</p>
			

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
		);
		})}	
	</Row>
}


// Peoplesingle.propTypes = {
// 	match: PropTypes.object

export default Peoplesingle;
