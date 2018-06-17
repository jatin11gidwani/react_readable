import React, { Component } from 'react'
import { Route} from 'react-router-dom'
import Header from './Header'
import DisplayPosts from './DisplayPosts'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>

          <Route exact path='/' render={ () => (
          <DisplayPosts/>
        )}/>
      </div>
    );
  }
}

export default App