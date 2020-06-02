
import React, { Component } from "react";
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

class BigbannerDeals extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Carousel id="wrapper">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fwallpapers%2Fnature%2Flandscape&psig=AOvVaw2h66H-3CibmBI22fnHQAKX&ust=1585891655739000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODk8vCAyegCFQAAAAAdAAAAABAD"
                                        alt=""
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://chrome.google.com/webstore/detail/%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6/cccojnlnkjoikemlooodcpagkjdodhfh"
                                        alt=""
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fphlearn.com%2Ftutorial%2Fcolor-landscape-photos-photoshop%2F&psig=AOvVaw2h66H-3CibmBI22fnHQAKX&ust=1585891655739000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODk8vCAyegCFQAAAAAdAAAAABAO"
                                        alt=""
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-lg-4" id="wrapper">

                        </div>
                    </div>
                </div>
            </div>
            
        );
    }


}

export default BigbannerDeals;