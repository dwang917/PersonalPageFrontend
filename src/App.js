import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent"; 
import Contact from "./pages/Contact"; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 font-mono">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
