import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { deleteThePost } from './../actions/index'

class DetailPost extends Component {

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
        <button className="button">
             Edit Post
           </button>
        <button className="button" onClick={()=> this.onDelete(post.id)}>
             Delete Post
           </button>
           
        <h4>Comments</h4>
       </div>
      
      
    )
  }
else {
  return (
    <div><h2>Error: 404. Page not found.</h2></div>
  )
}}
}

function mapStateToProps({ posts}, ownProps) {
  return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps,  { deleteThePost })(DetailPost)
// export default DetailPost
// 