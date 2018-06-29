import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { editComment} from './../actions/index'

class EditComment extends Component {

  state = {
    body : this.props.editingComment.body
  }
 
  onChangeBody(event) {
    this.setState({body :event.target.value})
  }

  handleSubmit(event) { 
    var postId = this.props.postId
    var category = this.props.category
    event.preventDefault();
    const formData = {};
    for (const data in this.refs) {
      formData[data] = this.refs[data].value;
    }
    var date = new Date()
    var timestamp = date.getTime()
    formData.timestamp = timestamp  
    console.log(formData);
    if(!formData.body) {
      alert("Enter the content!")
    }else {
      this.props.editComment(this.props.editingComment.id,formData, () =>{
      this.props.history.push(`/${category}/${postId}`)
      })
    }
  }
    
  render() {

    var postId = this.props.postId
    var category = this.props.category
    if(!this.props.editingComment) {
      return <div>Loading...</div>
    }
    else {
      console.log(this.props.editingComment)
      return (
        <div className="App">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form">
            <div>
            <label>Edit Comment</label>
            </div>
            <textarea value={this.state.body} type="text" ref="body" onChange={(e) => this.onChangeBody(e)} />
            </div>
            <button type="submit">Submit</button>
          </form>
          <button className="button" 
            onClick={() => this.props.history.push(`/${category}/${postId}`)}>
            Cancel
          </button>
        </div>
      )  
   }}
 }
 
export default connect(null,  { editComment })(EditComment)