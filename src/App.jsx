import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Home from "./Home";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<Error />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;