import React, { Component } from "react";
import '../css/App.css';

class LatestVideos extends Component {
    constructor(props) {
        super(props);
    }

    launchModalPopup() {
        alert("Checking out the popup");
    }

    render() {
        return (
            <div className="jumbotron container container-fluid rowpadding">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" onClick={this.launchModalPopup} style={{ "width": "18rem" }}>
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                        <div className="card" onClick={this.launchModalPopup} style={{ "width": "18rem" }}>
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                        <div className="card" onClick={this.launchModalPopup} style={{ "width": "18rem" }}>
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card" onClick={this.launchModalPopup} style={{ "width": "18rem" }}>
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                        <div className="card" onClick={this.launchModalPopup} style={{ "width": "18rem" }}>
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div> */}
            </div>
        );
    }
}

export default LatestVideos;