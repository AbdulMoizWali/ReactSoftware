import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";

export default function AppRouter() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>

}