import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage'
import Year2022 from './pages/Year2022';
import Year2023 from './pages/Year2023';
import Year2024 from './pages/Year2024';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/2022" element={<Year2022 />} />
        <Route path="/2023" element={<Year2023 />} />
        <Route path="/2024" element={<Year2024 />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
      <Footer></Footer>
    </Router>  
    </>
  )
}

export default App

