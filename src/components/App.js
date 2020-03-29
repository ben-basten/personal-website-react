import React from 'react';
import Router from './Router';
import Header from './Header/Header';
require('../scss/main.scss');

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Router />
            </div>
        );
    }
}

export default App;