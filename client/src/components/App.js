import React, { Component } from 'react'
import { Route, withRouter} from 'react-router-dom'
import Header from './Header'
import DisplayPosts from './DisplayPosts'
import './App.css'
import { fetchCategories, fetchPosts } from './../actions/index'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }


  render() {


    
    
    
    return (
      <div className="App">
         <Header/>
         
      
          <Route exact path='/' render={ () => (
          <DisplayPosts type={"all"} name={"All"}/>
        )}/>



         <Route exact path='/react' render={ () => (
            <DisplayPosts type={"react"} name={"React"}/>
         )}/> 
        
        <Route exact path='/redux' render={ () => (
          <DisplayPosts type={"redux"} name={"Redux"}/>
        )}/>

        <Route exact path='/udacity' render={ () => (
          <DisplayPosts type={"udacity"} name={"Udacity"}/>
        )}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts}
}

export default withRouter(connect(mapStateToProps, { fetchPosts })(App))