import React, { Component } from 'react';
import './App.css';
import Voter from './Voter'
import { connect } from 'react-redux'
import Comments from './Comments'
import { deleteThePost, fetchComments } from './../actions/index'

class DetailPost extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.id)
  }

  onDelete(id) {
    console.log('post deleted')
    this.props.deleteThePost(id)
    this.props.history.push('/')
  }

  render() {

    const {post} = this.props
    console.log(post)
    if(post) {
      var t = new Date( post.timestamp );
      var formatted = t.toDateString()

      return (
        <div>
          <h1>{post.title}</h1>
          <h3>By {post.author} on {formatted}</h3>
          <p>{post.body}</p>
          <button className="button" 
            onClick={()=> this.props.history.push(`/${post.category}/${post.id}/edit`)}>
            Edit Post
          </button>
          <button className="button" onClick={()=> this.onDelete(post.id)}>
            Delete Post
          </button>
          <Voter postId={post.id}/>
          <hr/>
          <h3>Comments</h3>
          <hr/>
          <Comments history={this.props.history} postId={this.props.post.id} postCategory={this.props.post.category}/>
        </div>
    )
    }
    else {
      return (
        <div><h2>Error: 404. Page not found.</h2></div>
      )
  }}
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts[ownProps.match.params.id],
           comments: state.comments
  }
}

export default connect(mapStateToProps,  { deleteThePost, fetchComments })(DetailPost)