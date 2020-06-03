import React, { Component } from "react";
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'
import article from './ArticleDetail'
import '../css/App.css';

class TrendingArticles extends Component {
    state = { articles: [] };

    componentDidMount() {
        fetch('https://productservices.herokuapp.com/posts/?page=1&limit=10')
            .then(res => res.json())
            .then((data) => {
                console.log(data.result.docs._id)
                this.setState({ articles: data.result.docs })
            })
            .catch(console.log.articles)
    }

    render() {
        const { articles } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="container rowpadding">
                        <h4 className="text-left"><b><u>Trending Articles</u></b></h4>
                        <div className="row">
                            {articles.map((article) => (
                                <div className="col-md-4" key={article._id}>
                                    <Link to={`/articledetail/${article._id}`}>
                                        <div className="media cardpadding" style={{ cursor: 'pointer' }}>
                                            <img className="align-self mr-3" src={article.image} height="62px"></img>
                                            <div className="media-body">
                                                <h6 className="font-weight-bold text-left">{article.title}</h6>
                                                <p className="font-weight-normal text-justify text-left small"> By {article.author}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default TrendingArticles;