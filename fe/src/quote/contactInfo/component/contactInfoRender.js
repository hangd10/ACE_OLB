import React from 'react';
import { Field, reduxForm } from 'redux-form';

let ContactInfoRender = ( props ) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={ handleSubmit }>
            <Field name="firstName" placeholder="First Name" component="input" type="text" />
            <Field name="lastName" placeholder="Last Name" component="input" type="text" />
            <input type="text" placeholder="Address" name="address" />


            <input type="text" placeholder="000-000-0000" name="phone" />
            <input type="text" placeholder="email" name="email" />

            <button type="submit">Submit</button>
            {/* <button type="button" onClick={props.cicFunction}>Click Me</button> */}
        </form>
    )
}

ContactInfoRender = reduxForm({
    form : 'contact'
})(ContactInfoRender);

export default ContactInfoRender;
