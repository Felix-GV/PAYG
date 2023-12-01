import React, { useState, useEffect } from "react";
import "./checkoutPage.css";
import PayPalButton from "../components/paypalButton";

const CheckoutPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform further processing, e.g., send data to a server for payment processing
    console.log("Form submitted:", formData);
  };

  const TextInput = ({ label, name, value, onChange, required }) => {
    return (
      <label>
        {label}:
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      </label>
    );
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Billing Information */}
        <div>
          <h3>Billing Information</h3>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          {/* Add other billing information fields here */}
        </div>

        {/* Payment Information */}
        <div>
          <h3>Payment Options</h3>

          {/* PayPal Button */}
          <ul>
            <button>Paypal</button>
          </ul>
          <ul>
            <button>Credit Card</button>
          </ul>
          <ul>
            <button>PayasyouGrow</button>
          </ul>

          <h3>Payment Information</h3>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Surname:
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </label>
          {/* Add other payment information fields here */}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
