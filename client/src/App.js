import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from './redux/storeConfiguration';
import { BrowserRouter, Route } from 'react-router-dom';
import BotsList from './components/BotsList';
import Home from './components/Home';
import Chat from './components/Chat';
import BotDetails from './components/BotDetails';
import BotAvatar from './components/BotAvatar'

class App extends Component {
    render() {
        const store = configureStore();

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="container-fluid full-heigth">
                        <div className="row full-heigth">
                            <nav className="col-12 col-sm-3 col-lg-2 bg-faded full-heigth sidebar">
                                <BotsList />
                            </nav>
                            <article className="col-12 col-sm-3 col-lg-2">
                                <Route path="/bot/:botId" component={BotDetails} />
                                <Route path="/chat/:botId" component={BotAvatar} />
                            </article>
                            <main className="col-12 col-sm-6 col-lg-8 full-heigth">
                                <Route path="/" exact component={Home} />
                                <Route path="/chat/:botId" component={Chat} />
                            </main>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
