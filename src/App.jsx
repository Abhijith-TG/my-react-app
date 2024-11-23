
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './components/signup_page';
import RegistrationForm from './components/signup_page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
