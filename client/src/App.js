import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from './redux/storeConfiguration';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { initializeIcons } from './components/utils/initializeIcons';
import BotsList from './components/BotsList';
import Home from './components/Home';
import Chat from './components/Chat';
import BotDetails from './components/BotDetails';
import BotAvatar from './components/BotAvatar'

const store = configureStore();
initializeIcons();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route render={({ location }) => (
                        <div className="container-fluid full-heigth">
                            <div className="row full-heigth">
                                <nav className="col-12 col-sm-3 col-lg-2 bg-faded full-heigth sidebar">
                                    <BotsList />
                                </nav>
                                <article className="col-12 col-sm-3 col-lg-2">
                                    <TransitionGroup>
                                        <CSSTransition key={location.pathname} classNames="move" timeout={250}>
                                            <Switch location={location}>
                                                <Route path="/bot/:botId" component={BotDetails} />
                                                <Route path="/chat/:botId" component={BotAvatar} />
                                            </Switch>
                                        </CSSTransition>
                                    </TransitionGroup>
                                </article>
                                <main className="col-12 col-sm-6 col-lg-8 full-heigth">
                                    <Route path="/" exact component={Home} />
                                    <Route path="/chat/:botId" component={Chat} />
                                </main>
                            </div>
                        </div>
                    )}>
                    </Route>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
