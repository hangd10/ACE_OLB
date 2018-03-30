import React from 'react';
import styles from '../contactInfoStyles.css'

import InputField from '../../../common/components/InputField/inputField'

let ContactInfoRender = ( props ) => {
    return (
        <form>

            <InputField { ...props.emailInputObj }
              onChangeHandler = {props.logCompInput}
            />
            <br/>
            <InputField { ...props.zipInputObj }
            />

            <br/>

          <button id="submitId" type="submit">Submit</button>

        </form>

    )
}

export default ContactInfoRender;
