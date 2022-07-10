
import './index.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Components/Header';
import Home from './Pages/HomePage';
import { BrowserRouter } from 'react-router-dom';

const element = document.getElementById('root');
const root = createRoot(element!);
root.render(
    <>
      <BrowserRouter>
        <Header/>
        <Home />
      </BrowserRouter>
    </>
);