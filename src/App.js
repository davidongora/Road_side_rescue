import React from 'react';
import PaymentForm from './Components/PaymentForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
// import Home from './Components/Home'
// import About from "./Components/About"
// import Features from './Components/Features'
// import Faq from './Components/Faq'
// import Brands from './Components/Brands'



function App() {
  return (
    <div>
      {/* < Navbar /> */}
      {/* < Home />
      < About />
      < Features />
      < Faq />
      < Brands />
      < Footer /> */}
      <PaymentForm />
      <ToastContainer />
    </div>
  );
}

export default App;
