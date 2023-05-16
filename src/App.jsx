import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import {OurStore} from "./pages/OurStore";
import { Blogs } from "./pages/Blogs";
import { CompareProduct } from "./pages/CompareProduct";
import { Wishlist } from "./pages/Wishlist";
import { Login } from "./pages/Login";
import { ForgetPassword } from "./pages/ForgetPassword";
import { Register } from "./pages/Register";
import { ResetPassword } from "./pages/ResetPassword";
import { SingleBlog } from "./pages/SingleBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="register" element={<Register />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
