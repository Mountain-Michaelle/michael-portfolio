import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomeComp from './Components/HomeComp';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Whatsapp from './Components/Whatsapp';
    import { Helmet } from "react-helmet-async";

function App() {
  return (
  <div className="App">
    <Helmet>
      <title>Michael Chinemelu | Fullstack Developer</title>
      <meta
        name="description"
        content="Michael Chinemelu is a fullstack developer specializing in React, Django, Golang JavaScript, and modern UI development."
      />
      <meta
        name="keywords"
        content="Michael Chinemelu, fullstack developer, React developer, Django developer JavaScript developer, web developer"
      />
    </Helmet>
    
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
