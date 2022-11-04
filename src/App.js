import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Layouts/Base";
import Home from "./Pages/Home";
import Card01 from "./Components/Elements/Card01";

function App() {
  return (
    <div>
     

      <BrowserRouter>
        <Base>
          <Routes>
          
          <Route index path="/" element={<Home/>}/>
          <Route  path="/card01" element={<Card01/>}/>
            
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
