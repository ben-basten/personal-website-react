import React from 'react';
import Router from './Router';
require('../scss/main.scss');

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Router />
            </div>
        );
    }
}

export default App;