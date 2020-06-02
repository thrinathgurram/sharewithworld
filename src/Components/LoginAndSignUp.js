import React, { Component } from "react";
import { render } from "@testing-library/react";
import { Card, CardDeck } from 'react-bootstrap';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginAndSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { height: props.height };
    }
    componentWillMount() {
        
        console.log(this.setState({ height: "Height--->"+window.innerHeight + 'px' }));
    }
    render() {
        return (
            <div>
                <div className="container-fluid signup">
                    <div class="row signup">
                        <div class="col-lg hidden-md-down login"> <p>1 odsdfsfsfssfsfsf 2 </p></div>
                        <div class="col-lg signup">1</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default LoginAndSignUp;