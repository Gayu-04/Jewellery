import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Home from "./Home";
import Product from "./components/Product";
import { useState, useEffect} from "react";
import UserContext from "./utils/UserContext";

function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data ={
      name: "Radhika",
    }
    setUserName(data.name);
  }, []);
  return (
    // data is coming from value 
    <UserContext.Provider value={{ loggedInUser: userName }}>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Error />} />
       
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;