import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from '../contactInfoStyles.css'

let ContactInfoRender = ( props ) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={ handleSubmit }>

          <div>

            <input onChange={props.logCompInput} className="blockLayout" type="number" placeholder="00000" name="zip" id="zipInput"/>

            <sup className="errorScript" id="zipInputError">your zipcode is invalid</sup>

          </div>

          <br/>

          <div>

            <input className="blockLayout" type="text" placeholder="email" name="email" id="emailInput"/>

            <sup className="errorScript" id="emailInputError">your email is invalid</sup>

          </div>

          <button type="submit">Submit</button>

        </form>
    )
}



ContactInfoRender = reduxForm({
    form : 'ContactForm'
})(ContactInfoRender);

export default ContactInfoRender;
