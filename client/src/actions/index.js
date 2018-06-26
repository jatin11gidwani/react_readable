import * as api from './../utils/api'

export const ADD_POST = 'ADD_POST'
export const FETCH_POSTS = 'FETCH_POSTS'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const UPDATE_VOTE = 'UPDATE_VOTE'
export const DELETE_POST = 'DELETE_POST'


export function fetchCategories ({ day, recipe, meal }) {
const request =  api.getCategories()
  return {
    type: GET_CATEGORIES,
    payload : request
  }
}



const ROOT_URL ='http://reduxblog.herokuapp.com/api'
const API_KEY = '1234'

export function fetchPosts() {
  const request = api.getAllPosts()
    console.log('Action',request)
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function updateVote (id, value) {
  
  if(value == 1) {
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
