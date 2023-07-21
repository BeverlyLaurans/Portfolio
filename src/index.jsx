import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import DarkMode from "./components/DarkMode/DarkMode";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import { ThemeProvider } from './context/ThemeContext';
import Error from "./components/Error/Error";
import BackToTop from "./components/BackToTop/BackToTop";
import Footer from "./components/Footer/Footer";
// import "./styles/css/prefixed/style.css";
import "./styles/scss/main.scss";

export default function App() {

  return (
    <Router>
      <ThemeProvider>
      <DarkMode/>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projets/:projectId" element={<Project />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <BackToTop />
      <Footer />
      </ThemeProvider>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)