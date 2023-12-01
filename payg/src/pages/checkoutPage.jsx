import React, { useState } from "react";
import PaypalButton from "../components/paypalButton";
import "./checkoutPage.css";

const CheckoutPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    totalAmount: "100", // Example
  });

  // State to track the selected payment option
  const [selectedPayment, setSelectedPayment] = useState(null);

  // State to track whether to show payment information
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);

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

    // If Credit Card is selected, show payment information
    if (paymentOption === "CreditCard") {
      setShowPaymentInfo(true);
    } else {
      // For other payment options, hide payment information
      setShowPaymentInfo(false);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform further processing, e.g., send data to a server for payment processing
    console.log("Form submitted:", formData);
  };

  // Handle closing payment information
  const handleClosePaymentInfo = () => {
    setShowPaymentInfo(false);
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
        <PaypalButton />
        <div>
          <h3>Payment Options</h3>

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
        {showPaymentInfo && (
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
            {/* Button to close payment information */}
            <button onClick={handleClosePaymentInfo}>Close Payment Info</button>
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
