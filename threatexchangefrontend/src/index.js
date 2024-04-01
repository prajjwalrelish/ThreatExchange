import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider, AdversariesProvider, DataProvider} from './contexts'
import { StyledEngineProvider } from '@mui/material/styles';
// import "bootstrap/dist/css/bootstrap.css";
// import "font-awesome/css/font-awesome.css";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <AuthProvider>
      <AdversariesProvider>
        <DataProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DataProvider>
      </AdversariesProvider>
    </AuthProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
