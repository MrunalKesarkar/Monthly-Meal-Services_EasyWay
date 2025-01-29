import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/navbar';
import './Payment.css'
import { FaCcAmazonPay, FaCcMastercard, FaCcPaypal, FaGooglePay } from 'react-icons/fa';
import { CiCreditCard1 } from 'react-icons/ci';


const PaymentForm = () => {
    const [paymentMethod, setPaymentMethod] = useState('card'); // Default to card payment
    const [amount, setAmount] = useState('');
    const [paymentMethodId, setPaymentMethodId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setPaymentSuccess(false);

        try {
            // Create payment intent with the selected payment method
            const response = await axios.post('/api/payment', {
                paymentMethodId,
                amount: parseInt(amount, 10) * 100, // Amount should be in the smallest currency unit (e.g., cents)
                paymentMethodType: paymentMethod,
            });

            // Handle successful payment here
            console.log('Payment successful:', response.data);
            setPaymentSuccess(true);

        } catch (err) {
            console.error('Payment error:', err.response ? err.response.data : err.message);
            setError('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container-fluid'>
            <Navbar/>
            <br />
            <br />
        <div className="payment-form">
            
            <form onSubmit={handleSubmit}>
            <h2 style={{alignContent:'center', display:'flex', marginLeft:'50px'}}>Payment Form</h2>
            <br />
            <br />
            <br />
                <div className="form-group">
                    <label htmlFor="amount">Amount (in INR):</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={handleAmountChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Payment Method:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="card"
                                checked={paymentMethod === 'card'}
                                onChange={handlePaymentMethodChange}
                            />
                            Card
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="upi"
                                checked={paymentMethod === 'upi'}
                                onChange={handlePaymentMethodChange}
                            />
                            UPI
                        </label>
                    </div>
                </div>

                {paymentMethod === 'card' && (
                    <div className="form-group">
                        <FaCcMastercard style={{marginRight:'5px', height:'30px', width:'30px'}} /> <CiCreditCard1 style={{marginRight:'5px', height:'30px', width:'30px'}}/> 
                        <label htmlFor="paymentMethodId">Card Payment ID:</label>
                        <input
                            type="text"
                            id="paymentMethodId"
                            value={paymentMethodId}
                            onChange={(e) => setPaymentMethodId(e.target.value)}
                            required
                        />
                    </div>
                )}

                {paymentMethod === 'upi' && (
                    <div className="form-group">
                        <FaGooglePay style={{marginRight:'5px', height:'30px', width:'30px'}} /> <FaCcPaypal style={{marginRight:'5px', height:'30px', width:'30px'}}  /><FaCcAmazonPay style={{marginRight:'5px', height:'30px', width:'30px'}}  />
                        <label htmlFor="paymentMethodId">UPI Payment ID:</label>
                        <input
                            type="text"
                            id="paymentMethodId"
                            value={paymentMethodId}
                            onChange={(e) => setPaymentMethodId(e.target.value)}
                            required
                        />
                    </div>
                )}

                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>

                {error && <div className="error-message">{error}</div>}
                {paymentSuccess && <div className="success-message">Payment successful!</div>}
            </form>
        </div>
        </div>
    );
};

export default PaymentForm;
