import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./app/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./app/Projects";
import Login from "./app/Login";
import Signup from "./app/Signup";
import Freelancers from "./app/Freelancers";
import Chats from "./app/Chats";
import Bids from "./app/Bids";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
      </Provider>
    </BrowserRouter>
  );
}

export default App;
