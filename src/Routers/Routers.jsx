import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Routers = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      {/* <Route path='/home' element={<Home/>}/> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
