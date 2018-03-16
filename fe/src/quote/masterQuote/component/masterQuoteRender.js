import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import { Field, reduxForm } from 'redux-form';
import ContactInfoComponent from '../../contactInfo/component/contactInfoComponent'
import VehicleInfoComponent from '../../vehicleInfo/component/vehicleInfoComponent'

import ContactInfoContainer from '../../contactInfo/component/contactInfoContainer'
import VehicleInfoContainer from '../../vehicleInfo/component/vehicleInfoContainer'

import RouteWithSubRoutes from '../../../setup/routes'

let MasterQuoteRender = ( props ) => {

    return (
      <div>

        <ul>
          <li><Link to="/quote/contact">Contact Info</Link></li>
          <li><Link to="/quote/vehicle">Vehicle Info</Link></li>
        </ul>

        <Switch>
          {/* <Route path='/quote/contact' component={ContactInfoComponent}/> */}
          {/* <Route path='/quote/vehicle' component={VehicleInfoComponent}/> */}

          <Route path='/quote/contact' component={ContactInfoContainer}/>
          <Route path='/quote/vehicle' component={VehicleInfoContainer}/>
        </Switch>

      </div>
    )

}

export default MasterQuoteRender;
