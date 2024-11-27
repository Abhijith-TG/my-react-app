
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductSearch from './components/Navbar'; 
import SearchResults from './components/SearchResults'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductSearch />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
