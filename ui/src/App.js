import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import Add from "./container/Add";
class App extends Component {
	renderRouter() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
        		<Route exact path="/add" component={Add} />
			</Switch>
		);
	}

	render() {
		return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
	}

}

export default App;
