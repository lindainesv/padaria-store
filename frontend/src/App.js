import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

export default function App() {
  return ( 
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route exact path="/" element={ <Navigate to="/home" /> } />

    </Routes>
  );
}