import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";
const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igkey) => (
    <li key={igkey}>
      <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
      {props.ingredients[igkey]}
    </li>
  ));
  return (
    <Aux>
      <h3>Order Summary</h3>
      <p>Delicious Burger: </p>
      <ul>{ingredientsSummary}</ul>
      <p>Proceed to checkout?</p>

      <Button btnType="Danger" clicked={props.purchaseCancel}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
