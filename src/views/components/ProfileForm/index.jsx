import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import DatePicker from 'material-ui/DatePicker'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import './style.scss'
import {SELECT_1, SELECT_2, SELECT_3, SELECT_4,SELECT_5} from './constants.js'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom
}) => (
<TextField
hintText={label}
floatingLabelText={label}
errorText={touched && error}

{...input}
{...custom}
/>
)


const renderSelectField = ({
	input,
	label,
	meta: { touched, error },
	children,
	...custom
}) => (
<SelectField className="selected-field"
floatingLabelText={label}
errorText={touched && error}
{...input}
onChange={(event, index, value) => input.onChange(value)}
children={children}
{...custom}
/>
)

const renderDatePicker = ({
	input,
	label,
	meta: { touched, error },
	minDate,
	maxDate
}) => {
	return(
		<DatePicker className="date-picker"
		floatingLabelText={label}
		onChange={(event, value) => input.onChange(value)}
		minDate={minDate}
		maxDate={maxDate}
		value={input.value !== "" ?  new Date(input.value) : undefined }
		/>
		)
}


const renderMultiLineField = ({ input, label, meta: { touched, error }, ...custom
}) => { 

	return(
		<TextField
		style={{width: "100%"}}
		hintText={label}
		floatingLabelText={label}
		errorText={touched && error}
		multiLine={true}
		rows={1}
		rowsMax={5}
		value={input.value}
		{...input}
		{...custom}
		/>
		)
}


const validate = values => {
	const errors = {}
	const requiredFields = [
	'firstName',
	'lastName',
	'dateOfBirth',
	'ethnicity',
	]
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = 'Required'
		}
	})

	return errors
}


class ProfileForm extends React.Component {

	limitLines = (event) => {
		if(this.getNumberOfLines(event.target.value) === 5)
			if(event.which === 13){
				event.preventDefault();
			}
		}

		getNumberOfLines = (str) => {
			if (str) {
				return str.split(/\r\n|\r|\n/).length;
			}
			return 1;
		}

		render(){
			
			return (
				<form>
					<div>
						<span>
							<Field name="firstName" component={renderTextField} label="First Name" />
						</span>
						<span>
							<Field name="lastName" component={renderTextField} label="Last Name" />
						</span>
						<span>
							<Field name="dateOfBirth" component={renderDatePicker} label="Date of Birth" minDate={new Date(1970, 0)} maxDate={new Date()} />
						</span>
						<span>
							<Field
							name="ethnicity"
							component={renderSelectField}
							label="Ethnicity"
							>
								<MenuItem value="select-1" primaryText={SELECT_1} />
								<MenuItem value="select-2" primaryText={SELECT_2} />
								<MenuItem value="select-3" primaryText={SELECT_3} />
								<MenuItem value="select-4" primaryText={SELECT_4} />
								<MenuItem value="select-5" primaryText={SELECT_5} />
							</Field>
						</span>
					</div>
					<div className="note-field-wrapper">
						<Field
						name="notes"
						component={renderMultiLineField}
						label="Notes"
						onKeyPress={(event) => this.limitLines(event)}
						/>
					</div>
				</form>
				)
		}
	}

	const mapStateToProps = (state, ownProps) => {
		
		return {
			initialValues: {
				firstName: ownProps.initialValues !== null  ? ownProps.initialValues.firstName : null,
				lastName: ownProps.initialValues !== null ? ownProps.initialValues.lastName : null,
				dateOfBirth: ownProps.initialValues !== null ? ownProps.initialValues.dateOfBirth : null,
				ethnicity: ownProps.initialValues !== null ? ownProps.initialValues.ethnicity : null,
				notes: ownProps.initialValues !== null? ownProps.initialValues.notes : null,
			},
			
		}
	}
	ProfileForm = connect(mapStateToProps)(ProfileForm);

	export default reduxForm({
		form: 'ProfileForm',
		enableReinitialize: true,
		keepDirtyOnReinitialize: true,
		validate,
	})(ProfileForm)