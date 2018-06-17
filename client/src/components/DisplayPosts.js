import React, { Component } from 'react'
import './App.css'
import Voter from './Voter'

class DisplayPosts extends Component {
  render() {
    return (
      <div>
        <h2> Posts </h2>
        <div className="book-shelf-changer">
          <select className='ui dropdown' >//value={this.props.commentSortOrder} onChange={this.sortChange}>
            <option value='-voteScore'>Sort by Date</option>
            <option value='voteScore'>Sort by votes</option>
          </select>

        <div>
          <div>
           <p>Title</p>
               <p> Author and date </p>
               <p> no of comments </p>
               <Voter/>
               <button className="button">
                {/* onClick={() => this.props.dosomething()}> */}
                Edit Post
              </button>
              <button className="button">
                Delete Post
              </button>
               <voter/>
              </div>

            </div>
          </div> 
      </div>
    )
  }
}

export default DisplayPosts
