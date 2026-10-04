import axios from 'axios';
import { Routes, Route } from 'react-router';
import { useEffect, useState, useCallback } from 'react';
import { HomePage } from './Pages/home/HomePage.jsx';
import { CheckoutPage } from './Pages/checkout/CheckoutPage.jsx';
import { OrderPage } from './Pages/orders/OrdersPage.jsx';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);


  const loadCart = useCallback(async () => {
    try {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    }catch (error) {
      console.error ("Failed to load cart:", error)
    }
      
      
    }, [])


  useEffect(() => {
    loadCart();
  }, [loadCart]);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart = {loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart = {loadCart} />} />
      <Route path="orders" element={<OrderPage cart={cart} />}  />
    </Routes>
  );
}

export default App;
