import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Register from "../components/Register";
import Form from "../components/Form";
import Home from "../components/Home";
import Profile from "../components/Profile";

const Routers = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      {/* <Route path='/home' element={<Home/>}/> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/form" element={<Form/>}/>
    </Routes>
  );
};

export default Routers;
