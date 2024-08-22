
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import SavedContacts from "./components/SavedContacts";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar/>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/saved-contacts" element={<SavedContacts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
