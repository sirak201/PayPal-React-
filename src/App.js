import React, { Fragment } from "react";
import "./App.css";
import NavBar from "./Components/navbar";
import { PayPalButton } from "react-paypal-button";
import key from "./keys";
var env = require("env-variable")();

const paypalOptions = {
  clientId: key,
  intent: "capture"
};

const buttonStyles = {
  layout: "vertical",
  shape: "rect",
  marginTop: "25px"
};
console.log(env);

function App() {
  return (
    <div className="App">
      <NavBar />
      <Fragment>
        <div style={{ marginTop: "50px" }}>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={27800.0}
          />
        </div>
      </Fragment>
    </div>
  );
}

export default App;
