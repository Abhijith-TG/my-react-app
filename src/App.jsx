import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loginpage from "./components/Loginpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
