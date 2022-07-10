
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as React from 'react';

const element = document.getElementById('root');
const root = createRoot(element!);
root.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" ><App /></Route>
            <Route path="/detail" ><h1>Detail</h1></Route>
        </Switch >
    </BrowserRouter>
);