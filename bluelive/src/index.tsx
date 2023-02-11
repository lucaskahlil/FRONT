import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Login } from './components/pages/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Profiles } from './components/pages/profile/profile';
import { EditProfileForm } from './components/pages/edit-profile-form/edit-profile-form';
import CreateProfileForm from './components/pages/create-profile-form/create-profile-form';
import HomeGames from './components/pages/home-profile-games/home-profile-games';
import { GameDetails } from './components/pages/game-details/game-details';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/homepage/:id' element={<HomeGames />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path='/editProfile/:id' element={<EditProfileForm/>} />
        <Route path='/createProfile/' element={<CreateProfileForm/>} />
        <Route path='/game/:id' element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

