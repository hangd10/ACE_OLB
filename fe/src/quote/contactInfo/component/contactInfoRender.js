import React from 'react';
import styles from '../contactInfoStyles.css'

import InputField from '../../../common/components/InputField/inputField'

let ContactInfoRender = ( props ) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={ handleSubmit }>
        {/*

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
          */}

            <InputField
              onChangeHandler = {props.logCompInput}
              labelClassName = { "eMailLabelClass" }
              className = { "eMailClass" }
              title = { "eMail" }
              value = { "" }
              icon = { null }
              maxLenth = { "100" }
              inputType = { "text" }
              placeHolder = { "Email" }
              inputName = { "email" }
              inputID = { "emailInputId" }
              throwError = { true }
              errorMessage = { "eMail is invalid" }
            />

          <button id="submitId" type="submit">Submit</button>

        </form>

    )
}

export default ContactInfoRender;
