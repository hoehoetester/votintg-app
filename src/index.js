import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import myApp from './reducers';
import Results from './components/result';
import App from './App';
import './index.css';


let store = createStore(myApp);

function render() {
    ReactDOM.render(
        <div>
            <App store={store} />
            <hr />
            <Results store={store} />
        </div>
        ,
        document.getElementById('root')
    );
}

store.subscribe(render);

render();