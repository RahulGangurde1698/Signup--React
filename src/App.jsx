import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Register from './Components/Register';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import { Welcomepage } from './Components/Welcomepage';
import { Footer } from './Components/Footer';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Register"
          element={<Register />} />
        <Route path="/Login"
          element={<Login />} />
        <Route path="/Welcomepage"
          element={<Welcomepage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
