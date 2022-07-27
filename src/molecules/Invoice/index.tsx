import React from "react";
import { Mail } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import Button from "../../atoms/Buttons";
import { InvoiceContainer } from "./invoice.style";
import axios from "../../db/instance"

export default function Invoice({cart}: any) {
  // send purchase to backend
  
  function handlePurchase() {
    const order = cart;
    axios.post("/orders.json", order)
      .then((res: any) => console.log(res))
      .catch((err: any) => console.log(err));
  }
  let sum = 0
  cart.forEach((i: any) => {
    return (sum += i.amount);
  });
  return (
    <InvoiceContainer>
      <h5 className="i-heading">Totals</h5>
      <div className="total-details">
        <div>
          <p className="property">Products</p>
          <p className="value">{cart.length}</p>
        </div>
        <div>
          <p className="property">Subtotal</p>
          <p className="value">$ {sum}</p>
        </div>
        <div>
          <p className="property">Shipping</p>
          <p className="value">free</p>
        </div>
      </div>
      <FlexBox className="total-p" justifyContent="space-between">
        <p>TOTAL</p>
        <p>$ {sum}</p>
      </FlexBox>
      <Button onClick={handlePurchase} variant="callToAction" width="269px" height="52px">
        Go to Checkout
      </Button>
      <FlexBox gap="10px" alignItems="center">
        <Mail />
        <p className="sendtomail">Send to my basket</p>
      </FlexBox>
      <div className="help-info">
        <p>Helpful information:</p>
        <ul>
          <li>Questions? Chat with us or call 09058563683</li>
          <li>Shipping internationally? Choose your destination & currency.</li>
          <li>Shipping methods & charges</li>
        </ul>
      </div>
    </InvoiceContainer>
  );
}
