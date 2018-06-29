import _ from 'lodash'
import { FETCH_POSTS, UPDATE_VOTE, DELETE_POST, CREATE_POST, EDIT_POST } from './../actions/index'
import { bindActionCreators } from 'C:/Users/SKOOP/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';

export default function postsReducer(state = [], action) {
    var newState = {}
    var result = []
    switch(action.type) {

        case FETCH_POSTS:
          console.log("State has been updated for posts")
          const posts = _.mapKeys(action.payload, 'id')
          return posts
        
        case UPDATE_VOTE:
          var arrState = _.values(state)
          console.log(arrState, state)
          var n = _.mapKeys(arrState, 'id')
          var a = _.map(n, post => {
            if(post.id == action.id) {
              console.log('match', post.voteScore)
              post.voteScore  += action.value
            }
            return post
          })
          console.log(n === state, a)
          var l = _.mapKeys(a, 'id')
          return l
        
        case DELETE_POST:
          console.log('Deleted')
          var arrState = _.values(state)
          console.log(arrState)
          result = arrState.filter(post => post.id !== action.id);
          newState = _.mapKeys(result, 'id')
          console.log("old", state, "new", newState)
          return newState
          
        case CREATE_POST:
          var arrState = _.values(state)
          console.log("old state = ". state)
          arrState.push(action.payload)
          console.log(action.payload)
          newState = _.mapKeys(arrState, 'id')
          console.log("new State = ", newState)
          return newState
        
        case EDIT_POST:
          var arrState = _.values(state)
          console.log(arrState, state)
          var n = _.mapKeys(arrState, 'id')
          var a = _.map(n, post => {
            if(post.id == action.id) {
              console.log('old title =', post.title)
              post.title = action.post.title
              console.log('new title =', post.title)
              post.body = action.post.body
            }
            return post
          })
          console.log(n === state, a)
          var l = _.mapKeys(a, 'id')
          return l
          
        default:
          return state
    }
}

