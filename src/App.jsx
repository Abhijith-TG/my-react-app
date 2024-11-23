
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AddNewproduct from './components/AddNewproduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<AddNewproduct/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
