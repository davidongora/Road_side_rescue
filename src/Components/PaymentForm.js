import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const data = {
            phoneNumber,
            amount
        }
        console.log("Handle submit function called");

        try {
            const asyncMakePayment = async () => {
                const url = "http://localhost:3000/make-payment";
                console.log("Async make payment function called");
                
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
        
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
        
                setAmount('');
                setPhoneNumber('');
                console.log("Records submitted successfully");
                
                const result = await response.json();
                console.log(result);
                
                toast.success("Payment initiated successfully");
            };
        
            await asyncMakePayment();
        } catch (error) {
            console.error("Error making payment:", error);
            toast.error("Payment failed. Please try again later.");
        }
    }
        
    return (
        <div className="payment-form center">
            <p>PaymentForm</p>
            <form onSubmit={handleSubmit}>
                <p>Welcome to Mpesa C2B</p>
                <label htmlFor="phoneNumber">Phone Number</label>
                <br />
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    aria-label="Your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <br />
                <label htmlFor="amount">Amount</label>
                <br />
                <input
                    type="text"
                    id="amount"
                    name="amount"
                    aria-label="Amount to send"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <br />
                <button type="submit">SEND MONEY</button>
            </form>
            <p><b>You are sending {amount} Kshs with your number {phoneNumber}</b></p>
            <p>Your account balance is ?????</p>
            <ToastContainer /> 
        </div>
    );
};

export default PaymentForm;
