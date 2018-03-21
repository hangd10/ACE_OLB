import React from 'react';
import { Field, reduxForm } from 'redux-form';

let ContactInfoRender = ( props ) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={ handleSubmit }>
          
          <input type="number" placeholder="00000" name="zip" />
          <input type="text" placeholder="email" name="email" />

          <button type="submit">Submit</button>

        </form>
    )
}

ContactInfoRender = reduxForm({
    form : 'contact'
})(ContactInfoRender);

export default ContactInfoRender;
