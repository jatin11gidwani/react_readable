import _ from 'lodash'
import { FETCH_POSTS, UPDATE_VOTE, DELETE_POST } from './../actions/index'

export default function postsReducer(state = {}, action) {
    var newState = {}
    var result = []
    switch(action.type) {

        case FETCH_POSTS:
          const posts = _.mapKeys(action.payload, 'id')
          return posts
        
        case UPDATE_VOTE:
         
          console.log("Old state = ", state, "votes",state[action.id].voteScore)
          result = _.values(state)
          var newStatee = _.mapKeys(result, 'id')
          newStatee[action.id].voteScore = 500
          console.log("new",newStatee)
          // console.log("New State", newStatee[action.id], "votes",newStatee[action.id].voteScore)
          // newStatee[action.id].voteScore = 100
          // console.log("final New State", newStatee[action.id], "votes",newStatee[action.id].voteScore)
          return state
        
        case DELETE_POST:

          console.log('Deleted')
          var arrState = _.values(state)
          console.log(arrState)

          result = arrState.filter(post => post.id !== action.id);
          newState = _.mapKeys(result, 'id')
          console.log("old", state, "new", newState)
          return newState
          

        default:
          return state
    }
}

