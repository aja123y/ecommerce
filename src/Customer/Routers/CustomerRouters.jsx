import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Cart from "../Customer/Cart/Cart";
import Navigation from "../Customer/Navigation/Navigation";
import Footer from "../Customer/Footer/Footer";
import Product from "../Customer/Product/Product";
import ProductDetails from "../Customer/ProductDetails/ProductDetails";
import Checkout from "../Customer/Checkout/Checkout";
import Order from "../Customer/Order/Order";
import OrderDetails from "../Customer/Order/OrderDetails";
import PaymentSuccess from "../Customer/Payment/PaymentSuccess";

const CustomerRouters = () => {
  return (
    <div>
      <div className="">
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:lavelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>

        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
