import React from 'react';
import '../styles/ContactInfoForm.css'

import InputField from '../../../common/components/InputField/InputField'

let ContactInfoRender = ( props ) => {
    return (
        <form className="ContactInfoForm" onSubmit={ props.handleSubmitFromParent } >

            <InputField { ...props.emailInputObj }
              onChange = {props.onChangeHandler}
            />
            <br/>


            <InputField { ...props.zipInputObj }
              onChange = {props.onChangeHandler}
            />

            <br/>

          <button className="button" id="submitId" type="submit">Submit</button>

        </form>

    )
}

export default ContactInfoRender;
