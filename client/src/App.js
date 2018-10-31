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
                    <div className="container-fluid full-heigth">
                        <div className="row full-heigth">
                            <nav className="col=12 col-md-3 bg-faded sidebar">
                                <BotsList />
                            </nav>
                            <main className="col-12 col-md-9 offset-md-3 full-heigth">
                                <Route exact path="/" component={Home} />
                                <Route exact path="/chat/:botId" component={Chat} />
                            </main>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
