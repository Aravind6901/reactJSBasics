import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import '../assets/css/main.scss';
class App extends React.Component {

    render() {
        var user = {
            name: "StromBreaker",
            age: 1,
            friends:["Rakoon", "Groot"]

        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <p>in between</p>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Thor"} age={1500} user={user} />
                    </div>
                </div>
            </div>

        );

    }
}
render(<App />, document.getElementById('app'));