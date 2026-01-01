import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomeComp from './Components/HomeComp';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Whatsapp from './Components/Whatsapp';

function App() {
  return (
  <div className="App">
     <Navbar />
     <Whatsapp />
      <Routes>
        <Route path='/' element={<HomeComp />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    <Footer />
  </div>
  );
}
export default App;
