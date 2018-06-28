import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateVote } from './../actions/index'
import './App.css'

class Voter extends Component {
  render() {
    console.log(this.props.postId,this.props.post.id,this.props.post.voteScore)
    return (
      <div>
        <button className="button" onClick={() => this.props.updateVote(this.props.post.id, -1)}>
        {/* //onClick={() => this.props.dosomething()}> */}
        -1 vote
        </button>
        <p>{this.props.post.voteScore}</p>
        <button className="button" onClick={() => this.props.updateVote(this.props.post.id, 1)}>
        +1 vote
        </button>  
      </div>
    );
  }
}

function mapStateToProps({ posts}, ownProps) {
  return { post: posts[ownProps.postId]}
}

export default connect(mapStateToProps, { updateVote })(Voter)
