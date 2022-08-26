import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from './Pages/Home';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
