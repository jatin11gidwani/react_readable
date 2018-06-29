import * as api from './../utils/api'

export const ADD_POST = 'ADD_POST'
export const FETCH_POSTS = 'FETCH_POSTS'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const UPDATE_VOTE = 'UPDATE_VOTE'
export const DELETE_POST = 'DELETE_POST'
export const GET_COMMENTS = 'GET_COMMENTS'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_VOTE_COMMENT = 'UPDATE_VOTE_COMMENT'
export const CREATE_POST = 'CREATE_POST'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const EDIT_POST = 'EDIT_POST'
export const EDIT_COMMENT = 'EDIT_COMMENT'

export function fetchCategories ({ day, recipe, meal }) {
const request =  api.getCategories()
  return {
    type: GET_CATEGORIES,
    payload : request
  }
}

export function fetchPosts() {
  const request = api.getAllPosts()
    console.log('Action',request)
    console.log('fetched posts')
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function updateVote (id, value) {
  if(value === 1) {
    api.upVotePost(id)
  }
  else {
    api.downVotePost(id)
  }
  return{
    type: UPDATE_VOTE,
    id : id,
    value : value
  }
}

export function deleteThePost(id) {
  const request = api.deletePost(id)
  return {
    type: DELETE_POST,
    id: id
  }
}

export function fetchComments(id) {
  const request = api.getAllComments(id)
  return {
    type: GET_COMMENTS,
    payload: request
  }
}

export function deleteTheComment(id,callback) {
  const request = api.deleteComment(id).then(() => callback())
  return {
    type: DELETE_COMMENT,
    id: id
  }
}

export function updateVoteComment(id,value) {
  if(value === 1) {
    api.upVoteComment(id)
  }
  else {
    api.downVoteComment(id)
  }
  return{
    type: UPDATE_VOTE_COMMENT,
    id : id,
    value : value
  }
}

export function createPost (post, callback) {
  const request = api.createPost(post).then(() => callback())
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function createComment(comment, callback) {
  const request = api.createComment(comment).then(() => callback())
  return {
    type : CREATE_COMMENT,
    payload : comment
  }
}

export function editPost(id, post, callback) {
  const request = api.editPost(id, post).then(() => callback())
  return {
    type: EDIT_POST,
    id: id,
    post: post
  }
}

export function editComment(id, comment, callback) {
  const request = api.editComment(id, comment).then(() => callback())
  return {
    type : EDIT_COMMENT,
    id : id,
    comment : comment
  }
}