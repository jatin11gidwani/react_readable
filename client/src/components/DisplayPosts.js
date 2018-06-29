import React, { Component } from 'react'
import './App.css'
import Voter from './Voter'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { deleteThePost } from './../actions/index'

class DisplayPosts extends Component {

  state = {
    sort : "date"
  }

  renderPosts() {

    var arr = _.values(this.props.posts);
    var curr = []
    if(this.state.sort === 'vote'){
      arr = arr.sort((a, b) => parseFloat(a.voteScore) - parseFloat(b.voteScore))
    }
    else if(this.state.sort === 'date') {
      arr = arr.sort((a, b) => parseFloat(a.timestamp) - parseFloat(b.timestamp))
    }
    
    arr = arr.map(post => {
      if(this.props.type === 'all') {
        curr.push(post)
      }
      else if (this.props.type === post.category) {
        curr.push(post)
      }
    })
  
    return curr.map(post => {
      var t = new Date( post.timestamp );
      var formatted = t.toDateString()
      return (
        <div key={post.id}>
          <Link to={`/${post.category}/${post.id}`}>
            <p>{post.title}</p>
          </Link>
          <p>By {post.author} on {formatted}</p>
          <p>{post.commentCount} comments</p>
          <Voter postId={post.id}/>
          <button className="button" 
            onClick={()=> this.props.history.push(`/${post.category}/${post.id}/edit`)}>
            Edit Post
          </button>
          <button className="button" onClick={()=> this.props.deleteThePost(post.id)}>
            Delete Post
          </button>
          <hr/>
        </div>
      )
  })}

  render() {

    const { name } = this.props
    return (
      <div>
        <h2>{ name } Posts </h2>
        <Link
          to="/posts/new">
          Add new Post
        </Link>
        <hr/>
        <select className='ui dropdown'
          onChange={(event) => this.setState({sort: event.target.value})}
          defaultValue={ this.state.sort }
        >
          <option value='date'>Sort by Date</option>
          <option value='vote'>Sort by votes</option>
        </select>
        {this.renderPosts()}   
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts}
}

export default connect(mapStateToProps, { deleteThePost })(DisplayPosts)
