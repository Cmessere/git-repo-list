
import './index.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import RepoDetailPage from './Pages/RepoDetailPage';

const element = document.getElementById('root');
const root = createRoot(element!);
root.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" ><App /></Route>
            <Route path="/repos/:owner/:repo" ><RepoDetailPage/></Route>
        </Switch >
    </BrowserRouter>
);