import React, { useState, useEffect } from 'react';
import SubscribeEmail from './SubscribeEmail';
import { Link } from 'react-router-dom'
import moment from 'moment';
import { connect} from 'react-redux';
import rootReducer from './reducer/rootReducer';
// import '../Css/blog.css';


function ArticleDetail({match,state}) {
    
    const [item, setItem] = useState({});
    const [hasError, setErrors] = useState(false);
    const [author, setAuthor] = useState({});
    alert('detail'+state.isAuthenticated)
    alert('detail'+JSON.stringify(state.user))
    
    useEffect(() => {
        fetchItem();
        fetchAuhtor();
        console.log("match===>" + match);
        console.log("param id====>" + match.params._id);
    }, [])



    const fetchItem = async () => {
        const fetchItems = await fetch(`https://productservices.herokuapp.com/posts/?id=${match.params._id}`);
        fetchItems.json()
        .then(fetchItems => setItem(fetchItems.post))
        .catch(err => setErrors(true));
        console.log(fetchItems);
    };

    const fetchAuhtor = async () => {
        const fetchAuhtor = await fetch(`https://productservices.herokuapp.com/posts/author?id=5ea6ed51c8fb34ea748f43bd`);
        fetchAuhtor.json()
        .then(fetchAuhtor => setAuthor(fetchAuhtor.author))
        .catch(err => setErrors(true));
    };
    function renderButtons() {
        if (state.isAuthenticated) 
          return (
            <Link to={{pathname:'/edit', state: {item:item, Edit:true }}}> Edit </Link>
          )
        
      }

    if(item.content){
    return (
        <div class="container container-fluid">
            <div class="row rowpadding">
                <div class="col-sm-8 blog-main text-left">
                    <h3><span class="badge badge-danger">{item.category}</span><span>       </span><span class="badge badge-danger">{item.subCategory}</span></h3>

                        <h2>{item.title}</h2>
                        <p>{moment(item.post_date).format('DD MMM, YYYY')} by <a href="#">{item.author}</a></p>
                        {renderButtons()}
                        
                <div class="ql-editor" dangerouslySetInnerHTML={{ __html:item.content}}></div>


                </div>

                <div class="col-sm-3 offset-sm-1">
                <div class="single-post-sidebar-meta">
                    <Link class="single-post-sidebar-meta-avatar" to={`/AuthorPage/${author._id}`}>
                    <img alt="" src="https://res.cloudinary.com/dtvxe0tur/image/upload/v1589513476/d9eggbdzz6vxtrcoqioz.png" srcset="https://res.cloudinary.com/dtvxe0tur/image/upload/v1589513476/d9eggbdzz6vxtrcoqioz.png" class="avatar avatar-64 photo" height="55" width="55"/>
                    </Link>
                    <div class="single-post-sidebar-meta-details">
                    <h5 class="single-post-sidebar-meta-author"><Link to={`/AuthorPage/${author._id}`}>{author.firstName}</Link></h5>
                    <span class="single-post-sidebar-meta-author-count">joined on <span> {moment(author.createdAt).format('DD MMM, YYYY')}</span> </span></div>
                    <p class="single-post-sidebar-meta-author-biography">{author.bio}</p>
                </div>

                  
                    <div>
                            <SubscribeEmail />
                    </div>
                
                    
                </div>
            </div>
        </div>
    );
    }else {
        return (
            <div style={{ width: '80%', margin: '3rem auto' }}>loading...</div>
        )
    }
}

function mapStateToProps(state){
    return {
        state: state
    }
};
export default connect(mapStateToProps)(ArticleDetail);


