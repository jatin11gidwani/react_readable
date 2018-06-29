import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import EditPost from './EditPost'

class EditPostBox extends Component {

  render() {
    if(!this.props.post) {
      console.log(this.props.post)
      return <div>Loading...</div>
    } else {
      console.log(this.props.history)
      return <EditPost history={this.props.history} editingPost={this.props.post}/>  
    }        
}}

function mapStateToProps(state, ownProps) {
    return { 
        post: state.posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps)(EditPostBox)