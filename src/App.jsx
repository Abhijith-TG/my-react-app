import { BrowserRouter, Route, Routes } from "react-router-dom";

 import Loginpage from "./components/Loginpage";
 import RegistrationForm  from "./components/RegistrationForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           
           <Route path="/" element={<Loginpage />} /> 
            {/* <Route path="/r" element={<RegistrationForm />}/>    */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
