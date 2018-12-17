import React from 'react';
import {getFormValues} from 'redux-form'
import { connect } from 'react-redux';
import LoginService from '../../services/login.js';
import './style.scss'

class ForgotPasswordView extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showForgotPassword: false,
			emailValue: null,
		}
	}
	
	handleForgotButton = () => {
		this.setState({
			showForgotPassword: true,
			emailValue: this.props.values ? this.props.values.email: null,
		})
	}


	showInfo = () => {
		if(this.props.values && LoginService.getUser(this.props.values.email)){
			return(<div style={{ "margin": "10% auto"}}>
					<div>Account: {this.props.values ? this.props.values.email : ''}</div>
					<div>ForgotPassword: {LoginService.getUser(this.props.values.email)}</div>
			</div>);
		}else if(this.props.values && !LoginService.getUser(this.props.values.email)){
			return (
				<div>Account does not exist</div>
			)
		}
		else{
			return null;
		}
	}

	render(){
		return (
			<div className="todo-app-forgotpassword-view">
				<button className="btn btn-outline-primary" type="button" onClick={this.handleForgotButton} disabled={!this.props.values} >
				Forgot Password
				</button>
			{
				(this.state.emailValue !== (this.props.values? this.props.values.email: null) ? false : this.state.showForgotPassword)  && this.showInfo()
			}
			
			</div>
			);
	}
}


ForgotPasswordView = connect(
	state => ({
		values: getFormValues('LoginForm')(state)
	})
	)(ForgotPasswordView)


	export default ForgotPasswordView;