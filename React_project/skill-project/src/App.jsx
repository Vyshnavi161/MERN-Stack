import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyLearning from "./pages/MyLearning";
import "./App.css";

import { ThemeProvider } from "./components/ThemeContext";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mylearning" element={<MyLearning />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default App;