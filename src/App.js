import "./styles.css";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import About from "./routes/About";

 const App =() => (
    <Router>
    <div className="App">
     
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service /> }/>
      <Route path ="/contact" element={<Contact /> }/>
      <Route path ="/about" element={<About /> }/>
      </Routes>

    </div>
    </Router>
 )

export default App;
