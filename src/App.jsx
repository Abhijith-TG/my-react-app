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
import AdminLogin from './components/AdminLogin';
import ForgotPassword from './components/ForgotPassword';
import AddNewproduct from './components/AddNewproduct';
import ProductSearch from './components/Navbar';
import SearchResults from './components/SearchResults';
import UserProfile from './components/Profile';
import './style/Profile.css'
import AccountSettings from './components/Accountsettings';
import AddressSettings from "./components/AddressSettings";
function App() {
  return (
    <Router>
      <ApiFetchContext>
      <Routes>
      <Route path='/signup' element={<RegistrationForm/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/category/:categoryName' element={<Home/>} />
      <Route path="/" element={<Loginpage />} />    
      <Route path="/f" element={<Forgetpassword />}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/admin' element={<AddNewproduct/>} />   
      <Route path="/nav" element={<ProductSearch />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path='/user' element={<UserProfile/>} />
      <Route path='/accset' element={ <AccountSettings />} />
      <Route path='/addset' element={ <AddressSettings/>} />
      </Routes>
      </ApiFetchContext>
    </Router>
  );
}



export default App;
