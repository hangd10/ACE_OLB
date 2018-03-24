import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from '../contactInfoStyles.css'

import Input from '../../../common/components/InputField/InputField'


let ContactInfoRender = ( props ) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={ handleSubmit }>

          <Input
            onChangeHandler = {props.logCompInput}
            // classNames = {}
            inputType = { "number" }
            placeHolder = { "00000" }
            inputName = { "zip" }
            inputID = { "zipInput" }
            throwError = { true }
          />

          <br/>

          <Input
            onChangeHandler = {props.logCompInput}
            // classNames = {}
            inputType = { "text" }
            placeHolder = { "Email" }
            inputName = { "email" }
            inputID = { "emailInput" }
            throwError = { true }
          />

          <br/>

          <button id="submitId" type="submit">Submit</button>

        </form>

    )
}

ContactInfoRender = reduxForm({
    form : 'ContactForm'
})(ContactInfoRender);

export default ContactInfoRender;
