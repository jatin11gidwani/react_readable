import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import './App.css'
import { createPost, fetchPosts} from './../actions/index'
import uuid from 'uuid'

class NewPost extends Component {

  renderField(field) {        
    if(field.label === "Category") {
      return (
        <div>
          <label>Category</label>
          <div>
            <label>
            <Field name="category" className="checked" component="input" type="radio" value="react"/>
              React
            </label>
            <label>
            <Field name="category" component="input" type="radio" value="redux"/>
              Redux
            </label>
            <label>
            <Field name="category" component="input" type="radio" value="udacity"/>
              Udacity
            </label>
            <div className="text-danger"> {field.meta.touched ? field.meta.error : ""}</div>
          </div>
        </div>
      )
    }
    else {
      return(
        <div className="form">
          <label >{field.label}</label>
            <input
              {...field.input}
              type="text"
            />
          <div className="text-danger"> {field.meta.touched ? field.meta.error : ""}</div>
        </div>
      )
    }
  }

  onSubmittion(values) {
    values.id = uuid.v1()
    var date = new Date()
    var timestamp = date.getTime()
    values.timestamp = timestamp
    values.voteScore = 1
    values.commentCount = 0
    values.deleted = false
    console.log(values)
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
        
  }

  render () {
    return (
      <div>
        <h1>Add new post </h1>
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
            <Field
                label="Category"
                name="category"
                component={this.renderField}
            />
            <button type="submit"
                className="btn btn-primary"
            >
              Submit
            </button>
        </form>
      </div>
    )
  }
}

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
  if(!values.category) {
    errors.category = "Select a Category!"
  }
  //If error is empyt, the form is fine to submit
  //if error has *any* properties, redux form assumes form is invalid
  return errors
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm' //This key should be unique per form in our app
})(
    connect(null, { createPost, fetchPosts })(NewPost)
)