import React from 'react';
import LoginView from '../views/LoginView';
import ForgotPasswordView from '../views/ForgotPasswordView';
import HomePage from './homePage.jsx';
import LoginService from '../services/login.js';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App  extends React.Component {
	getLoginSession = () => {
		if(LoginService.checkLogin()){	
			return true;
		}else{
			return false;
		}
	}

	render(){
		return (
			<div>
			
				<Router>
					<Switch>
						<Route path="/login" render={() => (
							<div>
								<div className="todo-app">
									<LoginView loginService={LoginService} loginState={this.getLoginSession()} logInHandler={this.props.logIn} />
								</div>
								<div className="todo-app">
									<ForgotPasswordView />
								</div>
							</div>)} 
						/>
						<Route path="/" render={() => (<HomePage path="/" component={HomePage} loginState={this.getLoginSession()} logOutHandler={this.props.logOut} />)} />
					</Switch>
				</Router>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	logOut: () => {
		LoginService.signout();
	},
	logIn: (cb, email) => {
		LoginService.authenticate(cb, email);
	}
})
export default connect(
	null,
	mapDispatchToProps
	)(App);

