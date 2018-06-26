import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateVote } from './../actions/index'
import './App.css'

class Voter extends Component {
  render() {
    return (
      <div>
        <button className="button" onClick={() => this.props.updateVote(this.props.postId, -1)}>
        {/* //onClick={() => this.props.dosomething()}> */}
        -1 vote
        </button>
        <p>{this.props.count}</p>
        <button className="button" onClick={() => this.props.updateVote(this.props.postId, 1)}>
        +1 vote
        </button>  
      </div>
    );
  }
}

export default connect(null, { updateVote })(Voter)
