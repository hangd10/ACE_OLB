import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from '../contactInfoStyles.css'
import Input from '../../../common/components/InputField/InputField'


let ContactInfoRender = ( props ) => {

    const zipFieldProp = props.zipField
    const emailFieldProp = props.emailField

    return (
        <form id={"contactInfoForm"} onSubmit={e => e.preventDefault()}>

          <Input
            inputID={zipFieldProp.inputID}
            className={zipFieldProp.classNme}
            title={zipFieldProp.title}
            placeholder={zipFieldProp.placeholder}
            maxLength={zipFieldProp.maxLength}
            icon={zipFieldProp.icon}
            errorMessage={zipFieldProp.errorMessage}
            onChange={zipFieldProp.onChange}
            typeAttr={zipFieldProp.typeAttr}
            throwError={zipFieldProp.throwError}
          />

          <br/>

          <Input
            inputID={emailFieldProp.inputID}
            className={emailFieldProp.classNme}
            title={emailFieldProp.title}
            placeholder={emailFieldProp.placeholder}
            maxLength={emailFieldProp.maxLength}
            icon={emailFieldProp.icon}
            errorMessage={emailFieldProp.errorMessage}
            onChange={emailFieldProp.onChange}
            typeAttr={emailFieldProp.typeAttr}
            throwError={emailFieldProp.throwError}
          />

          <br/>

          <button
            id="submitId"
            type="submit"
            onClick={props.onSubmit}
          >
            {props.submitText}
          </button>

        </form>

    )
}

ContactInfoRender = reduxForm({
    form : 'ContactForm'
})(ContactInfoRender);

export default ContactInfoRender;
