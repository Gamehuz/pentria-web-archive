import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Homepage from "./pages/Home";
import CustomerSignUp from "./pages/CustomerSignUp"

// jsdoc
/**
  * @returns {JSX.Element}
 all routes are defined here
  */
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/customer-signup" element={<CustomerSignUp />} />
    </Switch>
  );
};

export default Routes;
