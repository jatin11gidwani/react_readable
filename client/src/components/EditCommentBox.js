import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import EditComment from './EditComment'
import { fetchComments } from './../actions/index'

class EditCommentBox extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.id)
  }
   
  render() {

    if(!this.props.comment) {
      console.log(this.props.comment)
      return <div>Loading...</div>

    } else {
      return <EditComment history={this.props.history} 
        category={this.props.match.params.category}
        postId={this.props.match.params.id}
        editingComment={this.props.comment}
        />  
}}}

function mapStateToProps(state, ownProps) {
    return { 
        comment: state.comments[ownProps.match.params.commentId]
    }
  }

export default connect(mapStateToProps, {fetchComments})(EditCommentBox)