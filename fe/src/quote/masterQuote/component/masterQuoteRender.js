import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ContactInfoComponent from '../../contactInfo/component/contactInfoComponent'
import VehicleInfoComponent from '../../vehicleInfo/component/vehicleInfoComponent'


let MasterQuoteRender = ( props ) => {

    console.log("masterRender: ", props)
    return (

      <div className={"MasterQuote"}>


        {props.location.pathname == "/" ?

          <div className="App-intro">

            <h2><span>Shopping for car insurance?</span> <span>You've come to the right place!</span> </h2>

            <h5>State Farm keeps you and your family covered with great auto insurance that's also a great value. Get an online auto insurance quote, or speak with an agent or representative, any time, day or night. Either way, you'll learn how competitively priced auto insurance from the industry leader can be.</h5>

            <h4>Get an online auto insurance quote – it's fast and easy.</h4>

            <Link to={'/quote/contact'}>
              <button>Get a quote</button>
            </Link>

          </div>

        :

          <div className={"QuoteForms"}>
              <Route path={'/quote/contact'} component={ContactInfoComponent}/>
          </div>

        }


      </div>

    )

}

export default MasterQuoteRender;
