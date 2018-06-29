import React, { Component } from 'react'
import { Route, withRouter, Switch} from 'react-router-dom'
import Header from './Header'
import DisplayPosts from './DisplayPosts'
import './App.css'
import { fetchPosts } from './../actions/index'
import { connect } from 'react-redux'
import DetailPost from './DetailPost'
import NewPost from './NewPost'
import EditPostBox from './EditPostBox'
import EditCommentBox from './EditCommentBox'

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {

    return (
      <div className="App">
         <Header/>
         
         <Switch>

         <Route path="/posts/new"  render= { props => (
          <NewPost {...props} key={this.props.location.key}/>
        )}/>
         
         <Route path="/:category/:id/comments/:commentId/edit" location={this.props.location} render= { props => (
          <EditCommentBox {...props} key={this.props.location.key}/>
        )}/>

        <Route path="/:category/:id/edit" location={this.props.location} render= { props => (
          <EditPostBox {...props} key={this.props.location.key}/>
        )}/>

        <Route path="/:category/:id" location={this.props.location} render= { props => (
          <DetailPost {...props} key={this.props.location.key}/>
        )}/>

         <Route exact path='/react' render={ props => (
            <DisplayPosts type={"react"} name={"React"} {...props} key={this.props.location.key}/>
         )}/> 
        
        <Route exact path='/redux' render={ props => (
          <DisplayPosts type={"redux"} name={"Redux"} {...props} key={this.props.location.key}/>
        )}/>

        <Route exact path='/udacity' render={ props => (
          <DisplayPosts type={"udacity"} name={"Udacity"} {...props} key={this.props.location.key}/>
        )}/>

        <Route exact path='/' render={ props => (
          <DisplayPosts type={"all"} name={"All"} {...props} key={this.props.location.key}/>
        )}/>

        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts}
}

export default withRouter(connect(mapStateToProps, { fetchPosts })(App))