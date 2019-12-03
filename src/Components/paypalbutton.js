import { PayPalButton } from "react-paypal-button";
import React from "react";

export default function App() {
  const paypalOptions = {
    clientId:
      "AfFXgFyGbhcKFY3frpc9DAzvaMURvGDnjHUyVmezEKa9g0n-A37Zc4AGtUw9OKfKZfPLVmdHTpuEGTn1",
    intent: "capture"
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect"
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <PayPalButton
      paypalOptions={paypalOptions}
      buttonStyles={buttonStyles}
      amount={2500.0}
    />
  );
}
