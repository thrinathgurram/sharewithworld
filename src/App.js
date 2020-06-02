import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'
// import logo from './logo.svg';
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap';
import ArticleDetail from './Components/ArticleDetail';
import TrendingArticles from './Components/TrendingArticles';
import Footer from './Components/Footer';
import NewsAndArticles from './Components/NewsAndArticles';
import LatestVideos from './Components/LatestVideos';
import Posts from './Components/Posts';
import About from './Components/About';
import TopCashBackStores from "./Components/TopCashBackStores";
import ArticleTemplate from "./Components/ArticleTemplate";
import ListItemTemplate from "./Components/ListItemTemplate";
import Headerbar from './Components/Headerbar';
import CreateBlogPage from "./Components/createPage";
import NavigationBar from "./Components/NavigationBar"
import EditPost from "./Components/editPost";
import Login from "./Components/views/Login"
import Signup from "./Components/views/Signup"
import requireAuth from './Components/requireAuth'

function PrivateRoute ({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />}
    />
  )
}

// for login/signup
function PublicRoute ({component: Component, isAuthenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated === false
        ? <Component {...props} />
        : <Redirect to='/trendingarticles' />}
    />
  )
}

class App extends Component {
  render(){
    return(
        <BrowserRouter>
        <div className="App">
        <NavigationBar />
        <Switch>
          <Route isAuthenticated={this.props.isAuthenticated} path="/articledetail/:_id" component={ArticleDetail} />
          <Route isAuthenticated={this.props.isAuthenticated} path="/trendingarticles" component={TrendingArticles} />
          <Route isAuthenticated={this.props.isAuthenticated} path="/latestvideos" component={LatestVideos} />
          <Route isAuthenticated={this.props.isAuthenticated} path="/posts" component={Posts} />
          <Route isAuthenticated={this.props.isAuthenticated} path="/newsandarticles" component={NewsAndArticles} />
          <Route isAuthenticated={this.props.isAuthenticated} path="/about" component={About} />
          <Route isAuthenticated={this.props.isAuthenticated} path="/topcashbackstores" component={TopCashBackStores} />
          <Route isAuthenticated={this.props.isAuthenticated} path="/articletemplate" component={ArticleTemplate} />
          <Route isAuthenticated={this.props.isAuthenticated} path="/listitemtemplate" component={ListItemTemplate} />
          <PrivateRoute isAuthenticated={this.props.isAuthenticated} exact path="/create" component={CreateBlogPage} />
          <PrivateRoute isAuthenticated={this.props.isAuthenticated} exact path="/edit" component={EditPost} />
          <PublicRoute isAuthenticated={this.props.isAuthenticated} path='/login' component={Login} />
          <PublicRoute isAuthenticated={this.props.isAuthenticated} path='/signup' component={Signup} />
        </Switch>
        <Footer/>
      </div>
        </BrowserRouter>)
  }
}

function mapStateToProps(state){
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(App)
