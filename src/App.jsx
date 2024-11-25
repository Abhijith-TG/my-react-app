
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import UserProfile from './components/Profile';
import './style/Profile.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserProfile/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
