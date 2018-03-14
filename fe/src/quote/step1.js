import React, {  Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Step1 extends Component {
    render() {
        return (
            <form>
                <Field name="firstName" placeholder="First Name" component="input" type="text" />
                
                <input type="text" placeholder="Last Name" name="lastName" />
                <input type="text" placeholder="Address" name="address" />


                <input type="text" placeholder="000-000-0000" name="phone" />
                <input type="text" placeholder="email" name="email" />
            </form>
        )
    }
}

Step1 = reduxForm({
    form : 'simple'
})(Step1);

export default Step1;

