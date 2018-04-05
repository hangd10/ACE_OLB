import React from 'react';
import styles from '../contactInfoStyles.css'

import InputField from '../../../common/components/InputField/InputField'

let ContactInfoRender = ( props ) => {
    return (
        <form onSubmit={ props.handleSubmitFromParent } >

            <InputField { ...props.emailInputObj }
              onChange = {props.onChangeHandler}
            />
            <br/>


            <InputField { ...props.zipInputObj }
              onChange = {props.onChangeHandler}
            />

            <br/>

          <button id="submitId" type="submit">Submit</button>

        </form>

    )
}

export default ContactInfoRender;
