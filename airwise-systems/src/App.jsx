import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Dashboard from "./interface/dashboard/Dashboard";
import Register from "./interface/register/Register";
import Login from "./interface/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
