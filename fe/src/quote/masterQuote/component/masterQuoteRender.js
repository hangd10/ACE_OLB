import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ContactInfoComponent from '../../contactInfo/component/contactInfoComponent'
import VehicleInfoComponent from '../../vehicleInfo/component/vehicleInfoComponent'
import Menu from '../../../menu/component/menuComponent'

import RouteWithSubRoutes from '../../../setup/routes'
import masterQuoteLang from '../masterQuote.lang.js'
import styles from '../masterQuoteStyles.css'

let MasterQuoteRender = ( props ) => {

  console.log("master render")

    const lang = masterQuoteLang.en

    return (
      <div>

        <Menu menuItems={lang.menu} />
        <hr />

        <h2>{lang.banner}</h2>
        <p className="intro"> {lang.intro} </p>

        <Switch>

          <Route path='/quote/contact' component={ContactInfoComponent}/>
          <Route path='/quote/vehicle' component={VehicleInfoComponent}/>

        </Switch>


      </div>
    )

}

export default MasterQuoteRender;
