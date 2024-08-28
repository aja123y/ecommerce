
import './App.css';

import HomePage from './Customer/Pages/HomePage/HomePage';
import Footer from './Customer/Customer/Footer/Footer';
import Navigation from './Customer/Customer/Navigation/Navigation';
import Product from './Customer/Customer/Product/Product';
import ProductDetails from './Customer/Customer/ProductDetails/ProductDetails';
import Cart from './Customer/Customer/Cart/Cart';
import Checkout from './Customer/Customer/Checkout/Checkout';
import Order from './Customer/Customer/Order/Order';
import OrderDetails from './Customer/Customer/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Customer/Routers/CustomerRouters';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
