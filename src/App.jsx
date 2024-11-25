import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import Helpcenter from './components/Helpcenter';
import Customercenter from './components/Customercenter';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<HomePage/>}/> */}
          {/* <Route path='help' element={<Helpcenter/>}/> */}
          <Route path='' element={<Customercenter/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
