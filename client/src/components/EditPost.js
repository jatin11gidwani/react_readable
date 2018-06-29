import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { editPost} from './../actions/index'

class EditPost extends Component {

  state = {
    title : this.props.editingPost.title,
    body : this.props.editingPost.body
  }
 
  onChangeTitle(event) {
    this.setState({title :event.target.value})
  }

  onChangeBody(event) {
    this.setState({body :event.target.value})
  }

  handleSubmit(event) { 
    event.preventDefault();
    const formData = {};
    for (const data in this.refs) {
      formData[data] = this.refs[data].value;
    }
    console.log(formData);
    if(!formData.title) {
      alert("Enter Title!")
    }else if(!formData.body) {
      alert("Enter the content!")
    }else {
      this.props.editPost(this.props.editingPost.id,formData, () =>{
      this.props.history.push('/')
    })
    }
  }
    
  render() {
    if(!this.props.editingPost) {
      return <div>Loading...</div>
    }
    else {
      console.log(this.props.editingPost)
      return (
      <div className="App">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form">
            <div>
              <label >Title</label>
            </div>
            <textarea value={this.state.title} type="text" ref="title" onChange={(e) => this.onChangeTitle(e)}/>
          </div>
          <div className="form">
            <div>
              <label>Content</label>
            </div>
            <textarea value={this.state.body} type="text" ref="body" onChange={(e) => this.onChangeBody(e)} />
          </div>  
          <button type="submit">Submit</button>
        </form>
        <button className="button" onClick={()=> this.props.history.push(`/`)}>
          Cancel
        </button>
        </div>
      )      
    }
}}

export default connect(null,  { editPost })(EditPost)