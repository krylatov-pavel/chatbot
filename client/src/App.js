import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from './redux/storeConfiguration';
import { BrowserRouter, Route } from 'react-router-dom';
import BotsList from './components/BotsList';
import Home from './components/Home';
import Chat from './components/Chat';

class App extends Component {
    render() {
        const store = configureStore();

        return (
            <Provider store={store}>
                <BrowserRouter>
                        <div className="container">
                        <div className="row">
                            <div className="col=12 col-md-3">
                                <BotsList />
                            </div>
                            <div className="col-12 col-md-9">
                                <Route exact path="/" component={Home} />
                                <Route exact path="/chat/:botId" component={Chat} />
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
