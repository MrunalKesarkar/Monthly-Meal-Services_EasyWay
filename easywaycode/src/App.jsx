import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import { Provider } from 'react-redux';
import { store } from "./store";

import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import AllMess from "./pages/Categories/AllMess";
import MessDetails from "./pages/Categories/MessDetails";
import SignIn from "./signin/signin";
import Admin from "./admin/admin";
import AddNewMess from "./addMess/AddNewMess";
import Footer from "./components/Footer/Footer";
import PaymentForm from "./pages/Payment/Paymentform";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import AddToCart from "./addtocart/addtocart";
import MessDescriptionPage from "./components/MessDetails/MessDescriptionPage";

function App() {
  const [messes, setMesses] = useState([]); // Initialize with an empty array
  const [user, setUser] = useState("");
  const location = useLocation();

  // Function to add a mess to the cart
  const onCart = (mess) => {
    setMesses((prevMesses) =>
      prevMesses.map((m) =>
        m.id === mess.id ? { ...m, isInCart: true, count: m.count + 1 } : m
      )
    );
  };

  // Function to remove a mess from the cart
  const handleRemoveItem = (mess) => {
    setMesses((prevMesses) =>
      prevMesses.map((m) =>
        m.id === mess.id ? { ...m, isInCart: false, wishlist: false } : m
      )
    );
  };

  // Function to delete a mess entirely
  const handleDelete = (mess) => {
    setMesses((prevMesses) => prevMesses.filter((m) => m.id !== mess.id));
  };

  // Function to increment the quantity of a mess
  const handleIncrement = (mess) => {
    setMesses((prevMesses) =>
      prevMesses.map((m) =>
        m.id === mess.id ? { ...m, count: m.count + 1 } : m
      )
    );
  };

  // Function to decrement the quantity of a mess
  const handleDecrement = (mess) => {
    setMesses((prevMesses) =>
      prevMesses.map((m) =>
        m.id === mess.id ? { ...m, count: Math.max(m.count - 1, 1) } : m
      )
    );
  };

  return (
    <div className="container-fluid">
      <Provider store={store}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path='/allMess' element={<AllMess messes={messes} />} />
          <Route path="/messDetails" element={<MessDetails />} />
          <Route path="/mess/:id" element={<MessDescriptionPage messes={messes} />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/addnewmess" element={<AddNewMess messes={messes} setMesses={setMesses} />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin/addnewmess"
            element={<AddNewMess messes={messes} setMesses={setMesses} />}
          />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/shoppingcart" element={
            <AddToCart
              messes={messes}
              onSave={onCart}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onDelete={handleRemoveItem}
            />
          } />
        </Routes>
        {!['/login', '/register'].includes(location.pathname) && <Footer />}
        <ToastContainer />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;



/*
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import { Provider } from 'react-redux';
import { store } from "./store";

import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import AllMess from "./pages/Categories/AllMess";
import MessDetails from "./pages/Categories/MessDetails";
import SignIn from "./signin/signin";
import Admin from "./admin/admin";
import AddNewBook from "./addMess/AddNewMess";
import Footer from "./components/Footer/Footer";
import PaymentForm from "./pages/Payment/Paymentform";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import AddToCart from "./addtocart/addtocart";
import MessDescriptionPage from "./components/MessDetails/MessDescriptionPage";

function App() {
  const [messes, setMesses] = useState([]); // Initialize with an empty array
  const [user, setUser] = useState("");

  // Function to add a mess to the cart
  const onCart = (mess) => {
    setMesses((prevMesses) =>
      prevMesses.map((m) =>
        m.id === mess.id ? { ...m, isInCart: true, count: m.count + 1 } : m
      )
    );
  };

  // Function to remove a mess from the cart
  const handleRemoveItem = (mess) => {
    setMesses((prevMesses) =>
      prevMesses.map((m) =>
        m.id === mess.id ? { ...m, isInCart: false, wishlist: false } : m
      )
    );
  };

  // Function to delete a mess entirely
  const handleDelete = (mess) => {
    setMesses((prevMesses) => prevMesses.filter((m) => m.id !== mess.id));
  };

  // Function to increment the quantity of a mess
  const handleIncrement = (mess) => {
    setMesses((prevMesses) =>
      prevMesses.map((m) =>
        m.id === mess.id ? { ...m, count: m.count + 1 } : m
      )
    );
  };

  // Function to decrement the quantity of a mess
  const handleDecrement = (mess) => {
    setMesses((prevMesses) =>
      prevMesses.map((m) =>
        m.id === mess.id ? { ...m, count: Math.max(m.count - 1, 1) } : m
      )
    );
  };

  return (
    <div className="container-fluid">
      <Provider store={store}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path='/allMess' element={<AllMess />} />
          <Route path="/messDetails" element={<MessDetails />} />
          <Route path="/mess/:id" element={<MessDescriptionPage />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/mess/:id" element={<MessDescriptionPage />} />
          <Route path="/addNewBook" element={<AddNewBook />} />
          <Route path="/admin" element={<Admin />} />

          <Route
            path="/admin/addnewitem"
            element={<AddNewMessss messes={messes} setMesses={setMesses} />}
          />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/shoppingcart" element={
            <AddToCart
              books={books}
              onSave={onCart}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onDelete={handleRemoveItem}
            />
          } />
        </Routes>
        <ToastContainer />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
*/
