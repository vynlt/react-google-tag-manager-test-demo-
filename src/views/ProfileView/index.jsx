import React from 'react';
import ProfileForm from "../components/ProfileForm";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { reset, getFormValues, isInvalid, isPristine} from 'redux-form'  
import { connect } from 'react-redux' 
import ProfileService from '../../services/profile.js'
import LoginService from '../../services/login.js'
import './style.scss'

class ProfileView extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			isReset: false,
			showSuccess: false
		}
	}

	handleSubmit = () => {
		if(!this.props.invalid){
			this.setState({
				showSuccess: false
			})
			const firstName = this.props.values ? this.props.values.firstName: null;
			const lastName= this.props.values ? this.props.values.lastName: null;
			const dateOfBirth = this.props.values ? this.props.values.dateOfBirth: null;
			const ethnicity = this.props.values ? this.props.values.ethnicity: null;
			const notes = this.props.values ? this.props.values.notes: null;
			const data = {firstName: firstName,
				lastName: lastName,
				dateOfBirth: dateOfBirth + '',
				ethnicity: ethnicity,
				notes: notes}
				ProfileService.save(LoginService.checkLogin(), data, () => this.setState({
					showSuccess: true
				}));
			}
		}
		handleReset = () => {
			this.setState({
				isReset: true,
				showSuccess: false
			})
			this.props.reset('ProfileForm');
		}

		onInitial = () => {
			if(this.state.isReset){
				console.log("Null initial")
				return null
			}
			else
				return ProfileService.getUser(LoginService.checkLogin());

		}

		render(){
			return(
				<div>
				<div className="profile-header">
				<h1 className="profile">
				Profile
				</h1>
				</div>
				<MuiThemeProvider muiTheme={getMuiTheme()}>
				<ProfileForm initialValues={this.onInitial()} onChange={() => this.setState({
					showSuccess: false})}/>
				</MuiThemeProvider>
				{this.state.showSuccess && (
					<div className="alert alert-success">
					<strong>Success!</strong> Your profile has been updated
					</div>
					)
			}
			<div className="btn-wrapper">
			<button className="btn btn-outline-primary" onClick={this.handleSubmit} disabled={this.props.invalid}>
			Save
			</button>
			<button className="btn btn-outline-dark" onClick={this.handleReset} disabled={this.props.pristine && this.props.invalid}>
			Clear Values
			</button>
			</div>
			</div>
			);
		}
	}

	export default connect(state => (
	{
		values: getFormValues('ProfileForm')(state),
		invalid: isInvalid('ProfileForm')(state),
		pristine:  isPristine('ProfileForm')(state)
	}), { reset })(ProfileView)