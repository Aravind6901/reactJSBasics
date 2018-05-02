import React from 'react';
import {render} from 'react-dom';

import '../assets/css/main.scss';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Bring Me Thanoss.......!!!</h1>
            </div>
        );

    }
}


render(<App/>, document.getElementById('app'));