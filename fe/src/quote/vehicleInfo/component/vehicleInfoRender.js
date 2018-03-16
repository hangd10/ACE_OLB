import React from 'react';
import { Field, reduxForm } from 'redux-form';

let VehicleInfoRender = ( props ) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={ handleSubmit }>
            <Field name="make" placeholder="Make" component="input" type="text" />
            <Field name="model" placeholder="Model" component="input" type="text" />
            <button type="submit">Submit</button>
        </form>
    )
}

VehicleInfoRender = reduxForm({
    form : 'vehicle'
})(VehicleInfoRender);

export default VehicleInfoRender;
