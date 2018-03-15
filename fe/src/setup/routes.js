import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MasterQuote from '../quote/masterQuote/component/masterQuoteComponent'
import ContactInfo from '../quote/contactInfo/component/contactInfoComponent'


const routes = [

  {
    path: "/quote",
    component: MasterQuote,

    routes: [
      {
        path: "/quote/contactInfo",
        component: ContactInfo
      },
    ]
  },

];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

export default RouteWithSubRoutes;
