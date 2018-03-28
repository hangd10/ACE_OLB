import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from '../contactInfoStyles.css'

import contactInfoLang from '../contactInfo.lang.js'
import Input from '../../../common/components/InputField/InputField'


let ContactInfoRender = ( props ) => {

    const lang = contactInfoLang[props.language]

    return (
        <form id={"contactInfoForm"} >

          <Input
            inputID={"zipInput"}
            className={"contactInfoField"}
            title={lang.fields.zip.title}
            placeholder={lang.fields.zip.placeholder}
            maxLength={5}
            icon={null}
            errorMessage={lang.fields.zip.errorMessage}
            onChange={props.handleZipInputVal}
            typeAttr={"number"}
          />

          <br/>

          <Input
            inputID={"emailInput"}
            className={"contactInfoField"}
            title={lang.fields.email.title}
            placeholder={lang.fields.zip.placeholder}
            icon={null}
            errorMessage={lang.fields.zip.errorMessage}
            onChange={props.handleEmailInputVal}
            typeAttr={"text"}
          />

          <br/>

          <button id="submitId" type="submit">{lang.submit}</button>

        </form>

    )
}

ContactInfoRender = reduxForm({
    form : 'ContactForm'
})(ContactInfoRender);

export default ContactInfoRender;
