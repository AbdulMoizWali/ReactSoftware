import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import Login from "../Screens/Login";

export default function AppRouter() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                
            </Routes>
        </BrowserRouter>
    </>

}