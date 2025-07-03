import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <body>
      <div className='main'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <footer>
        <h4>Alvaro De La Cruz</h4>
        <sub>© {new Date().getFullYear()} All rights reserved.</sub>
      </footer>
    </body>
  );
}

export default App;
