import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>In A New Component Of Home Page</p>
                <p>Mighty {this.props.name} and his age is {this.props.age}</p>
                <p>Thor Came with his new {this.props.user.name} </p>
                <div>
                    <h4>Thor Also has his new Friends with him.</h4>
                    <ul>
                        {this.props.user.friends.map((friends,i)=> <li key={i}>{friends}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}