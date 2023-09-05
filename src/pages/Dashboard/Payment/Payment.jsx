import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK); 


const Payment = () => {
    const [card] =useCart()
    const total = card.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            <h1 className='text-3xl text-center'>Pay Money And Enjoy</h1>
            <Elements stripe={stripePromise}>
               <CheckoutForm price={price} />
           </Elements>
        </div>
    );
};

export default Payment;