import React, { useState, useEffect } from "react";
import "./checkoutPage.css";

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

  // State to track the selected payment option
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle payment option button click
  const handlePaymentOptionClick = (paymentOption) => {
    setSelectedPayment(paymentOption);
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
        {/* Payment Information */}
        <div>
          <h3>Payment Options</h3>

          {/* PayPal Button */}
          <ul>
            <button onClick={() => handlePaymentOptionClick("PayPal")}>
              PayPal
            </button>
          </ul>
          <ul>
            <button onClick={() => handlePaymentOptionClick("PAYG")}>
              PAYG
            </button>
          </ul>
          <ul>
            <button onClick={() => handlePaymentOptionClick("CreditCard")}>
              Credit Card
            </button>
          </ul>
        </div>
        {selectedPayment === "CreditCard" && (
          <div>
            <h3>Payment Information</h3>
            <TextInput
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <TextInput
              label="Surname"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              required
            />
            <TextInput
              label="Card Number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
            <TextInput
              label="Expiry Date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
            />
            <TextInput
              label="CVV"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        {/* Submit Button */}
        <div>
          <button type="submit">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
