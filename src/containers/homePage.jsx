import React from 'react';
import MainView from '../views/MainView';
import HeaderView from '../views/HeaderView';
import ProfileView from '../views/ProfileView';
import AboutView from '../views/AboutView';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';


const HomePage = ({ component: Component, loginState, logOutHandler, ...rest }) => {
	return (
		<Route
		{...rest}
		render={(props) =>
			loginState ? (
				<div className="todo-app">
				<HeaderView onLogout={logOutHandler} />
				<Router>
				<Switch>
				<Route exact path="/" component={MainView} />
				<Route exact path="/profile" component={ProfileView} />
				<Route path="/about" component={AboutView} />
				</Switch>
				</Router>
				</div>
				) : (
				<Redirect
				to={{
					pathname: "/login",
					state: { from: props.location }
				}}
				/>
				)
			}
		/>
	);
}
export default HomePage;