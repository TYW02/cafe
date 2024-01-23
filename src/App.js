import './App.css';
import { BrowserRouter as Router, Routes, Route} 
from 'react-router-dom';
import LandingPage from './Pages/LandingPage.js';


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' Component={LandingPage}/>
        </Routes>

    </Router>
    
    
    
    
    
    
    
    
    </>
  );
}

export default App;
