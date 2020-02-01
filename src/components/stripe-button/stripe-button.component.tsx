import React from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";

const StripeCheckoutButton: React.FC<{ price: number }> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_QAiiiNLPRud942ECce2VgIRO00q81ZypOl";

  const onToken = (token: Token) => {
    console.log(token);
    alert("Payment Succesfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
