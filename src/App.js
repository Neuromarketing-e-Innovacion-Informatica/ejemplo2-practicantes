import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { ChefsPage } from './pages/ChefsPage';
import { ContactPage } from './pages/ContactPage';

import { NoPage } from './pages/NoPage';

export const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={ HomePage } />
				<Route exact path="/about" component={ AboutPage } />
				<Route exact path="/menu" component={ MenuPage } />
				<Route exact path="/chefs" component={ ChefsPage } />
				<Route exact path="/contact" component={ ContactPage } />

				<Route exact component={ NoPage } />
			</Switch>
		</Router>
	)
}
