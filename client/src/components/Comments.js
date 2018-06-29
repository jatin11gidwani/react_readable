import React, { Component } from 'react';
import './App.css';
import _ from 'lodash'
import { connect } from 'react-redux'
import VoterComment from './VoterComment'
import { fetchPosts,fetchComments, deleteTheComment } from './../actions/index'
import NewComment from './NewComment'

class Comments extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.postId)  
  }

  onDelete(id) {
    console.log('comment deleted')
    this.props.deleteTheComment(id,() => {
      this.props.fetchPosts()
    })
  }
  
  renderComments() {
    var arr = _.values(this.props.comments);
    console.log(arr)   
      return arr.map(comment => {
        return (
          <div key={comment.id}>
          
            <p>By {comment.author}</p>
            <p>{comment.body}</p>
            <VoterComment commentId={comment.id}/>
            <button className="button" onClick={()=> this.props.history.push(`/${this.props.postCategory}/${this.props.postId}/comments/${comment.id}/edit`)}>
             Edit Comment
           </button>
           <button className="button" onClick={()=> this.onDelete(comment.id)}>
             Delete Comment
           </button>
           <hr/>
           </div>
        )
      })
  }
  
  render() {
        return(
            <div>{this.renderComments()} 
            <hr/>
            <NewComment postId={this.props.postId}/>
            </div>
        )
  }
}

function mapStateToProps({comments}, ownProps) {
    return { comments: comments}
  }

export default connect(mapStateToProps,  { fetchPosts, fetchComments, deleteTheComment })(Comments)