import axios from 'axios';
import { useEffect, useState } from 'react';
import { OrderSummary }  from './OrderSummary.jsx';
import { PaymentSummary } from './PaymentSummary.jsx'
import { CheckoutHeader} from './CheckoutHeader.jsx'
import './checkout-header.css';
import './CheckoutPage.css';

export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    let fetchCheckoutData = async() => {
      let response = await axios
      .get('/api/delivery-options?expand=estimatedDeliveryTime')
        setDeliveryOptions(response.data);
    

    response = await axios.get('/api/payment-summary')
      setPaymentSummary(response.data);
}
       fetchCheckoutData();
  }, [cart]);
  return (
    <>
      <title>Checkout</title>
      <OrderSummary cart = {cart} deliveryOptions = {deliveryOptions} loadCart = {loadCart} />
      
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <PaymentSummary paymentSummary = {paymentSummary} loadCart = {loadCart} />
        </div>
      </div>
    </>
  );
}
