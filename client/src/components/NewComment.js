import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import './App.css'
import { createComment, fetchPosts} from './../actions/index'
import uuid from 'uuid'

class NewComment extends Component {

  state = {
    new : "no"
  }    

  renderField(field) {
    return(
      <div className="form">
        <label >{field.label}</label>
        <input
          {...field.input}
          type="text"
        />
        <div className="text-danger"> {field.meta.touched ? field.meta.error : ""}</div>
      </div>
  )}

  onSubmittion(values) {
    values.id = uuid.v1()
    values.parentId = this.props.postId
    var date = new Date()
    var timestamp = date.getTime()
    values.timestamp = timestamp
    values.voteScore = 1
    values.commentCount = 0
    values.deleted = false
    values.parentDeleted = false
    console.log(values)
    this.props.createComment(values, () => {
      this.props.fetchPosts()
      this.setState({new: "no"})
    })      
  }

  render () {
    if(this.state.new === "no") {
      return (
        <div>
          <button onClick={() => this.setState({new: "yes"})}>
            New Comment  
          </button>
        </div>
      )
    }
    else {
      return (
        <div>
          <h1>Add new Comment </h1>
          <form name="PostsNewForm" onSubmit={this.props.handleSubmit((values) => this.onSubmittion(values))}> 
            <Field
                label="Title"
                name="title"
                component={this.renderField}
            />
            <Field
                label="Author"
                name="author"
                component={this.renderField}
            />
            <Field
                label="Body"
                name="body"
                component={this.renderField}
            />
            <button type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
          </form>
          <button onClick={() => this.setState({new: "no"})}>Cancel</button>
        </div>
      )
    }       
}}

function validate(values) {
  const errors = {}
  //Validate the inputs from values
  if(!values.title) {
    errors.title = "Please enter a title!"
  }
  if(!values.author) {
    errors.author = "Enter Author Name!"
  }
  if(!values.body) {
    errors.body = "Enter the body!"
  }
   
  //If error is empyt, the form is fine to submit
  //if error has *any* properties, redux form assumes form is invalid
  return errors
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewComment' //This key should be unique per form in our app
})(
    connect(null, { createComment, fetchPosts })(NewComment)
)