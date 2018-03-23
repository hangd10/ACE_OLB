import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from '../contactInfoStyles.css'

// console.log(styles)
//const required = value => value ? undefined : 'Required'

// export const renderTextInput = field => {
//   const { input, label, type, meta: { touched, error } } = field
// 	return (
// 		<div>
// 			<label>{label}</label>
// 			{' '}
// 			<input {...input} type={type}/>
// 			{' '}
// 			{touched && error && <span className='help-block'>{error}</span>}
// 		</div>
// )}

let ContactInfoRender = ( props ) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={ handleSubmit }>

          <div>

            <input onChange={props.logCompInput} className="blockLayout" type="number" placeholder="00000" name="zip" id="zipInput"/>

            <sup className="errorScript" id="zipInputError">your zipcode is invalid</sup>

          </div>

          <br/>

          {/* <Field name="email" component={renderTextInput} type="text" label="eMail"
            validate={[ required ]}
          /> */}
          <div>

            <input className="blockLayout" type="text" placeholder="email" name="email" id="emailInput" onChange={props.handleEmailInputVal}/>

            <sup className="errorScript" id="emailInputError">your email is invalid</sup>

          </div>

          {/* <button id="submitId" type="submit" disabled={ props.submitting}>
					  { props.submitting ? 'Submitting (takes 1 s)' : 'Submit'}
          </button> */}
            <button id="submitId" type="submit">Submit</button>
        </form>
    )
}

ContactInfoRender = reduxForm({
    form : 'ContactForm'
})(ContactInfoRender);

export default ContactInfoRender;
