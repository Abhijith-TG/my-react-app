import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './components/SearchResults'; 
import RegistrationForm from './components/signup_page';
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<RegistrationForm/>} />
        <Route path="/product-search" element={<ProductSearch />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
