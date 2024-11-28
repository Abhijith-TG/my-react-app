import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './components/SearchResults'; 
import RegistrationForm from './components/signup_page';
import Home from './components/Home';
import './styles/home.css'
import './styles/CategoryCard.css'
import ApiFetchContext from './services/ApiFetchContext';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <ApiFetchContext>
      <Routes>
      <Route path='/' element={<RegistrationForm/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/category/:categoryName' element={<Home/>} />
      <Route path="/product-search" element={<ProductSearch />} />
      <Route path="/search" element={<SearchResults />} />
      </Routes>
      </ApiFetchContext>
    </Router>
  );
}

export default App;
