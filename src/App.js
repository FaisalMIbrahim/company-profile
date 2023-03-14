import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components

import { Formulir1 } from "./components/Formulir1";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Register } from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="formulir1" element={<Formulir1 />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
