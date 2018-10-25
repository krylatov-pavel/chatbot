import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from './redux/storeConfiguration';
import BotsList from './components/BotsList';

class App extends Component {
    render() {
        const store = configureStore();

        return (
            <Provider store={store}>
                <BotsList />
            </Provider>
        );
    }
}

export default App;
