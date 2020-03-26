import React from 'react';
import Router from './Router';
import Navigation from './partials/Navigation';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Navigation />
                <Router />
            </div>
        );
    }
}

export default App;