import React, { Component } from "react";
import '../css/App.css';
class Posts extends Component {
    state = {
        usersposts: []
    };

    componentDidMount() {
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then((data) => {
                this.setState({ usersposts: data })
            })
            .catch(console.log.usersposts)
    }
    render() {
        const { usersposts } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="container rowpadding">
                        <h4 className="text-left"><b><u>Trending Posts</u></b></h4>
                        <div className="row">
                            {usersposts.data().map((post) => (
                                <div className="col-md-4">
                                    <div className="media cardpadding">
                                        <img className="align-self mr-3" src={post.avatar} height="62px"></img>

                                        {/* <div className="media-body">
                                            <h6 className="font-weight-bold text-left">{post.title}</h6>
                                            <p className="font-weight-normal text-justify text-left small"> {post.body}</p>
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;