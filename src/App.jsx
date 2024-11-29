import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/signup_page';
import Home from './components/Home';
import './styles/home.css'
import './styles/CategoryCard.css'
import ApiFetchContext from './services/ApiFetchContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginpage from "./components/Loginpage";
import Forgetpassword from "./components/Forgetpassword";
function App() {
  return (
    <Router>
      <ApiFetchContext>
      <Routes>
      <Route path='/sign' element={<RegistrationForm/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/category/:categoryName' element={<Home/>} />
      <Route path="/login" element={<Loginpage />} />    
      <Route path="/f" element={<Forgetpassword />}/>   
      </Routes>
      </ApiFetchContext>
    </Router>
  );
}
export default App;
