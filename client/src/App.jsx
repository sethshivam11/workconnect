import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/pages/Projects";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Freelancers from "./components/pages/Freelancers";
import Chats from "./components/pages/Chats";
import Bids from "./components/pages/Bids";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-inter flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/bids" element={<Bids />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
