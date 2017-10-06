import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App =  () => {



    return (
        <div>
        <h1> Hello World!</h1>
            <p> I'm a gnasta by heart</p>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
