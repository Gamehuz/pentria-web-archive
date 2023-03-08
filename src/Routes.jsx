import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Homepage from "./pages/Home";

// jsdoc
/**
  * @returns {JSX.Element}
 all routes are defined here
  */
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Homepage />} />
    </Switch>
  );
};

export default Routes;
