
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import ForgotPassword from './components/ForgotPassword';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
