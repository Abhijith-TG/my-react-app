
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import './styles/home.css'
import './styles/CategoryCard.css'
import ApiFetchContext from './services/ApiFetchContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <ApiFetchContext>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/category/:categoryName' element={<Home/>} />
        </Routes>
        </ApiFetchContext>
      </BrowserRouter>
    </>
  );
}

export default App;
