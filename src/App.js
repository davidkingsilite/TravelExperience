import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import About from "./routes/About";
import SignUp from "./routes/SignUp";

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  </Router>
);

export default App;
