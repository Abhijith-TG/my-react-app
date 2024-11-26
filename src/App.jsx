
import { Route, BrowserRouter, Routes } from 'react-router-dom';
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
