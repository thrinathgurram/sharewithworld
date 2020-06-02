import React, { Component } from "react";
import '../css/App.css';

class TopCashBackStores extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="stores rowpadding">
                <div class="container-fluid py-2">
                    <h2 class="font-weight-light talignleft_stores">Top Cashback Stores</h2>
                    <div class="d-flex flex-row flex-nowrap">
                        <div class="card card-body">
                            <h6 class="card-title cardsBG">Card 1</h6>
                            {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                        <div class="card card-body"> <h6 class="card-title">Card 2</h6></div>
                        <div class="card card-body"> <h6 class="card-title">Card 3</h6></div>
                        <div class="card card-body"> <h6 class="card-title">Card 4</h6></div>
                    </div>
                </div>
            </div>
        );
    }

}

export default TopCashBackStores;