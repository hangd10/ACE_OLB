import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import { Field, reduxForm } from 'redux-form';
import ContactInfoComponent from '../../contactInfo/component/contactInfoComponent'
import RouteWithSubRoutes from '../../../setup/routes'

let MasterQuoteRender = ( {props, routes} ) => {

    return (
      <div>
        <ContactInfoComponent />
      </div>
    )

}

export default MasterQuoteRender;
