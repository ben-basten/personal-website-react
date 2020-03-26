import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Media from './media/Media';
import Code from './code/Code';
import Contact from './contact/Contact';
import NotFound from './NotFound';
import Navigation from './partials/Navigation';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;