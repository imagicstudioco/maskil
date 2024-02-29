






import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import "./assets/css/main.css";
import "./assets/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
