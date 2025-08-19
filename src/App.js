import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <div className="px-8">
                <div className="max-w-5xl mx-auto">
                  <div className="min-h-[55vh] sm:min-h-[58vh] md:min-h-[60vh] lg:min-h-[62vh] flex items-center justify-center pt-6 sm:pt-8 md:pt-12">
                    <div className="w-full max-w-3xl">
                      <MainContent />
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="/about" element={
              <div className="max-w-5xl mx-auto px-8">
                <About />
              </div>
            } />
            <Route path="/contact" element={
              <div className="max-w-5xl mx-auto px-8">
                <Contact />
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
