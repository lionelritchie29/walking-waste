import React, { useContext } from 'react';
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
import HistoryPage from './routes/history';
import HelpCenterPage from './routes/help-center';
import DonationStepPage from './routes/donation-step';
import DonatePage from './routes/donate';
import DonateActivePage from './routes/donate/active';
import DonateDonePage from './routes/donate/done';
import ArticlePage from './routes/articles';
import ArticleDetailPage from './routes/articles/detail';
import { ToastContainer } from 'react-toastify';
import NotificationProvider from './providers/NotificationProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NotificationProvider>
          <ToastContainer />
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<HomePage />} />

              <Route path='/donation-step' element={<DonationStepPage />} />

              <Route path='/donate' element={<DonatePage />} />
              <Route path='/donate/active' element={<DonateActivePage />} />
              <Route path='/donate/done' element={<DonateDonePage />} />

              <Route path='/articles' element={<ArticlePage />} />
              <Route path='/articles/:slug' element={<ArticleDetailPage />} />

              <Route path='/rewards' element={<RewardPage />} />
              <Route path='/rewards/my' element={<MyRewardsPage />} />

              <Route path='/saved-address' element={<SavedAddressPage />} />
              <Route path='/history' element={<HistoryPage />} />
              <Route path='/help-center' element={<HelpCenterPage />} />

              <Route
                path='*'
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/login' element={<LoginPage />} />
            </Route>
          </Routes>
        </NotificationProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
