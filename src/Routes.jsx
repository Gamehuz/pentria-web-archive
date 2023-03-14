import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Aboutus from "./pages/AboutUs";
import Homepage from "./pages/Home";
import LoginPage from "./pages/Login";
import LoginOrSignUp from "./pages/LoginOrSignUp";
import Payment from "./pages/Payment";
import Receipt from "./pages/Receipt";

// jsdoc
/**
  * @returns {JSX.Element}
 all routes are defined here
  */
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/loginorsignup" element={<LoginOrSignUp />}/>
      <Route path="/payment" element={<Payment />}/>
      <Route path="/receipt" element={<Receipt />} />
    </Switch>
  );
};

export default Routes;
