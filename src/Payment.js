import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {};

  const handleChange = (event) => {
    setDisabled(event.empty); //if event is empty disable the button
    setError(event.error ? event.error.message : ""); //if error show the error otherwise show nothing
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} items</Link>
        </h1>

        <div className="payment_section">
          <div className="payment_tittle">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 react lane</p>
            <p>los angeles,ca</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_tittle">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              ></CheckoutProduct>
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_tittle">
            <h3>Payment method</h3>
          </div>

          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}></CardElement>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
