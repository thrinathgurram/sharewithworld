import React, { Component } from "react";
import '../css/App.css';
class SubscribeEmail extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group row">
                        <b><label for="exampleInputEmail1">Enjoyed this article? Stay informed by joining our newsletter!</label></b> 
                        <input type="email" className="form-control border border-info" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <button type="submit" className="form-control btn btn-info">Subscribe</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SubscribeEmail;