import React, { Component } from 'react';

class ArticleTemplate extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then((data) => {
                console.log(data.data);
                this.setState({ users: data.data })
            })
            .catch(console.log)
    }

    render() {

        const { users } = this.state;
        return (
            <div class="container container-fluid rowpadding">
                <div className="row">
                    <div className="container rowpadding">
                        <h4 className="text-left"><b><u>Articles</u></b></h4>
                        <div className="row">
                            {users.map((user) => (
                                <div className="col-md-3">
                                    <div class="card">
                                        <img src={user.avatar} height="127" width="255" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{user.email}</h5>
                                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleTemplate;