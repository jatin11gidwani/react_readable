import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateVote } from './../actions/index'
import './App.css'

class Voter extends Component {
  render() {
    var post = this.props.posts[this.props.postId]
    console.log(this.props.postId,post.id,post.voteScore)
    return (
      <div>
        <button className="button" onClick={() => this.props.updateVote(post.id, -1)}>
        {/* //onClick={() => this.props.dosomething()}> */}
          -1 vote
        </button>
        <p>{post.voteScore}</p>
        <button className="button" onClick={() => this.props.updateVote(post.id, +1)}>
          +1 vote
        </button>  
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { posts: state.posts}
}

function mapDispatchToProps(dispatch) {
  return {
    updateVote: (id, value) => dispatch(updateVote(id,value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Voter)
