import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './routes/register';
import UserProvider from './providers/UserProvider';
import LoginPage from './routes/login';
import HomePage from './routes';
import RewardPage from './routes/rewards';
import MyRewardsPage from './routes/rewards/my';
import SavedAddressPage from './routes/saved-address';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />

            <Route path='/rewards' element={<RewardPage />} />
            <Route path='/rewards/my' element={<MyRewardsPage />} />

            <Route path='/saved-address' element={<SavedAddressPage />} />

            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
