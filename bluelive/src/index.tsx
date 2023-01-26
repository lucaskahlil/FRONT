import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Login } from './components/pages/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/home/home';
import { Profiles } from './components/pages/profile/profile';
import { EditProfileForm } from './components/pages/edit-profile-form/edit-profile-form';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path='/editProfile/:id' element={<EditProfileForm/>} />
        <Route path='/createProfile/' element={""} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

