import React, { Component } from "react";
import { Card, CardDeck } from 'react-bootstrap';
import koala from '../koala.jpg';
import '../css/App.css';

class NewsAndArticles extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="rowpadding">
                <div className="container-fluid containerposition narticles">
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={koala} />
                            <Card.Body>
                                {/* <Card.Title>Card title</Card.Title> */}
                                <Card.Text className="text-left text-block">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer> */}
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={koala} />
                            <Card.Body>
                                {/* <Card.Title>Card title</Card.Title> */}
                                <Card.Text className="text-left text-block">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer> */}
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={koala} />
                            <Card.Body>
                                {/* <Card.Title>Card title</Card.Title> */}
                                <Card.Text className="text-left text-block">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer> */}
                        </Card>
                    </CardDeck>
                </div>
            </div>
        );
    }
}

export default NewsAndArticles;