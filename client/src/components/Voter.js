
import React, { Component } from 'react'
import './App.css'

class Voter extends Component {
  render() {
    return (
      <div>
        <button className="button">
        {/* //onClick={() => this.props.dosomething()}> */}
        -1 vote
        </button>
        <p> Count</p>
        <button className="button">
        +1 vote
        </button>  
      </div>
    );
  }
}

export default Voter
