import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/homePageComponents/Navbar'
import Footer from './Components/homePageComponents/Footer';
import HomePage from './pages/HomePage'
import Year2022 from './pages/Year2022';

import Year2023 from './pages/Year2023';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        {/*<Route path="/" element={<HomePage />} />*/}
        {/*<Route path="/" element={<Year2022 />} />*/}
        <Route path="/" element={<Year2023 />} />
      </Routes>
      <Footer></Footer>
    </Router>  
    </>
  )
}

export default App

