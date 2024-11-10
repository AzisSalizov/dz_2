// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CharactersList from './components/CharactersList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <Provider store={store}>
      <div className="App">
        <CharactersList />
      </div>
    </Provider>
);

export default App;
