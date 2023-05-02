import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Products from "../Screens/Products";
import Cart from "../Screens/Cart";

export default function AppRouter() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="products" element={<Products />} />
                <Route path="cart" element={<Cart />} />
                
            </Routes>
        </BrowserRouter>
    </>

}