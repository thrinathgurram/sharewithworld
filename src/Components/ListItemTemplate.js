import React, { Component } from 'react';
import '../css/App.css';

class ListItemTemplate extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        fetch('http://productservices.herokuapp.com/products/')
        .then(res => res.json())
        .then((data) => {
            this.setState({ articles: data })
        })
        .catch(console.log.articles)
    }

    render() {

        const { articles } = this.state;
        return (
            <div class="container container-fluid rowpadding">
                <div className="row">
                    <div className="container">
                        <h4 className="text-left"><b><u>Articles</u></b></h4>
                            {articles.map((article) => (
                                <div className="col-md-4">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <div className="media cardpadding">
                                                <img className="align-self mr-3" src={article.image} height="62px"></img>
                                                <div className="media-body">
                                                    <h6 className="font-weight-bold text-left">{article.title}</h6>
                                                    <p className="font-weight-normal text-justify text-left small"> {article.body}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItemTemplate;