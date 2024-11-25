import { BrowserRouter, Route, Routes } from "react-router-dom";

 import Loginpage from "./components/Loginpage";
 import Forgetpassword from "./components/Forgetpassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           
           <Route path="/" element={<Loginpage />} /> 
          <Route path="/f" element={<Forgetpassword />}/>   
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
