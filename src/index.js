import WithWindowsMonitor from 'hoc/WithWindowMonitor';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import WithAuth from './hoc/WithAuth';
import './index.scss';
import AppRouter from './routes/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <WithAuth>
      <WithWindowsMonitor>
        <AppRouter />
      </WithWindowsMonitor>
    </WithAuth>
  </BrowserRouter>
);


