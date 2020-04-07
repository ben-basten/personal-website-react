import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/home';
import Media from '../pages/media';
import Code from '../pages/code';
import Contact from '../pages/contact';
import NotFound from '../pages/404';
require('../scss/main.scss');

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/media" component={Media} />
                    <Route exact path="/code" component={Code} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
                {/* <Footer /> */}
            </BrowserRouter>
        );
    }
}

export default App;