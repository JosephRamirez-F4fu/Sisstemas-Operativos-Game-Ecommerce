import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";
import Test from "./pages/Test/Test";
import { UserProvider } from "./Provieder/UsuarioProvieder";
import React,{useEffect,useState} from "react";
export default function App() {



  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </UserProvider>
  );
}
