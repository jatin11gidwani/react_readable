import React, { Component } from 'react'
import { Route, withRouter, Switch} from 'react-router-dom'
import Header from './Header'
import DisplayPosts from './DisplayPosts'
import './App.css'
import { fetchCategories, fetchPosts } from './../actions/index'
import { connect } from 'react-redux'
import DetailPost from './DetailPost'

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }


  render() {


    
    
    
    return (
      <div className="App">
         <Header/>
         <Switch>
         <Route path="/posts/new"  render= { () => (
          <div> Add new post </div>
        )}/>

        <Route path="/:category/:id" location={this.props.location} render= { props => (
          <DetailPost {...props} key={this.props.location.key}/>
        )}/>


        {/* <Route path="/posts/:id" component={DetailPost} /> */}
          

         <Route exact path='/react' render={ () => (
            <DisplayPosts type={"react"} name={"React"}/>
         )}/> 
        
        <Route exact path='/redux' render={ () => (
          <DisplayPosts type={"redux"} name={"Redux"}/>
        )}/>

        <Route exact path='/udacity' render={ () => (
          <DisplayPosts type={"udacity"} name={"Udacity"}/>
        )}/>

        <Route exact path='/' render={ () => (
          <DisplayPosts type={"all"} name={"All"}/>
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