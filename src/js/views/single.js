import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Single = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container detalis">
				<div className="row">
					<div className="col list">
						<ul>
							{store.people.map((item, index) => (
								<li key={index}>
									{item[0]} : {item[1]}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
