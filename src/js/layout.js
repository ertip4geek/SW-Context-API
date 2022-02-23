import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Peoplesingle } from "./views/peopleSingle";
import injectContext from "./store/appContext";

import { Barra } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./component/people";
import { Vehicles } from "./component/vehicles";
import { Planets } from "./component/planets";





//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Barra />
					<Switch>
						<Route exact path="/">
							<People />
							<Planets />
							<Vehicles />
						</Route>
						<Route exact path="/peopleSingle/:theid">
							<Peoplesingle/>
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
