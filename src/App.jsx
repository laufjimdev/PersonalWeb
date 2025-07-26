import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/homePageComponents/Navbar'
import HomePage from './pages/HomePage'
import Year2022 from './pages/Year2022';


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        {/*<Route path="/" element={<HomePage />} />*/}
        <Route path="/" element={<Year2022 />} />
      </Routes>
    </Router>  
    </>
  )
}

export default App

