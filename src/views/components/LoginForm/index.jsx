import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import PasswordField from 'material-ui-password-field'

const validate = values => {
  const errors = {}
  const requiredFields = [
  'email',
  'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (values.password && !/[A-Z]/.test(values.password)) {
    errors.password = 'A least one uppercase letter';
  }else if (values.password && !/[a-z]/.test(values.password)) {
    errors.password = 'A least one lowercase letter';
  }else if (values.password && !/[0-9]/.test(values.password)) {
    errors.password = 'A least one digit letter';
  }
  return errors
}

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

const renderPasswordField = ({ input, label, meta: { touched, error }, ...custom
}) => (
  <PasswordField
  hintText={label}
  floatingLabelText={label}
  errorText={touched && error}
  {...input}
  {...custom}
  />
)

const LoginForm = props => {
    const {  error, handleSubmit, pristine, reset, submitting, invalid} = props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="email" component={renderTextField} label="Email" />
        </div>
        
        <div>
          <Field name="password" component={renderPasswordField} label="Password" />
        </div>
        {error && <strong>{error}</strong>}
        <div>
          <button className="btn btn-outline-primary" type="submit" disabled={pristine || submitting || invalid}>
          Submit
          </button>
          <button className="btn btn-outline-dark" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
          </button>
        </div>
      </form>
      )
}

export default reduxForm({
  form: 'LoginForm',
  validate,
})(LoginForm)