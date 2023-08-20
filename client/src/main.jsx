import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Landing from './components/Landing/Landing.jsx';
import Login from './components/Login/Login.jsx';
import DoctorRegistration from './components/registration/doctorRegistration.jsx';
import PatientRegistration from './components/registration/patientRegistration.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/patientregistration" element={<PatientRegistration />} />
        <Route path="/doctorregistration" element={<DoctorRegistration />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/userlogin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
