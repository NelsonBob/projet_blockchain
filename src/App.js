import "./App.css";
import Navbar from './components/NavBar/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
