import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateVoteComment } from './../actions/index'
import './App.css'

class VoterComment extends Component {
  render() {
    var comment = this.props.comments[this.props.commentId]
    console.log(this.props.commentId,comment.id,comment.voteScore)
    return (
      <div>
        <button className="button" onClick={() => this.props.updateVoteComment(comment.id, -1)}>
        {/* //onClick={() => this.props.dosomething()}> */}
          -1 vote
        </button>
        <p>{comment.voteScore}</p>
        <button className="button" onClick={() => this.props.updateVoteComment(comment.id, 1)}>
          +1 vote
        </button>  
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments}
}

export default connect(mapStateToProps, { updateVoteComment })(VoterComment)
