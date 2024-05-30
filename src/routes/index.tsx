
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';


export const ListRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />   
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </BrowserRouter>
  );
};

