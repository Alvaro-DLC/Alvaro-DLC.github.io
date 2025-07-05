import { HashRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    // <body>
    <div>
      <div className='main'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
