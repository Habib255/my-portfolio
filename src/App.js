import './App.css';
import Navbar from './Pages/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import MyServices from './Pages/MyServices';
import MySkills from './Pages/MySkills';
import Footer from './Pages/Footer';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":services" element={<MyServices />} />
          <Route path=":skills" element={<MySkills />} />
          <Route path=":projects" element={<About />} />
          <Route path=":contact" element={<About />} />

        </Route>
        <Route path="about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
