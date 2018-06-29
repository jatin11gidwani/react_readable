import _ from 'lodash'
import { GET_COMMENTS, DELETE_COMMENT, UPDATE_VOTE_COMMENT, CREATE_COMMENT, EDIT_COMMENT } from './../actions/index'

export default function commentsReducer(state = {}, action) {
   
    switch(action.type) {

        case GET_COMMENTS:
          const comments = _.mapKeys(action.payload, 'id')
          return comments
        
        case DELETE_COMMENT:
          return _.omit(state, [action.id])

        case UPDATE_VOTE_COMMENT:
          var arrState = _.values(state)
          console.log(arrState, state)
          var n = _.mapKeys(arrState, 'id')
          var a = _.map(n, comment => {
            if(comment.id === action.id) {
              console.log('match', comment.voteScore)
              comment.voteScore  += action.value
            }
            return comment
          })
          console.log(n === state, a)
          var l = _.mapKeys(a, 'id')
          return l
        case CREATE_COMMENT:
          arrState = _.values(state)
          console.log("old state = ", state)
          arrState.push(action.payload)
          console.log(action.payload)
          var newState = _.mapKeys(arrState, 'id')
          console.log("new State = ", newState)
          return newState

        case EDIT_COMMENT:
          var arrState = _.values(state)
          console.log(arrState, state)
          var n = _.mapKeys(arrState, 'id')
          var a = _.map(n, comment => {
            if(comment.id == action.id) {
              console.log('old body =', comment.body)
              comment.timestamp = action.comment.timestamp
              comment.body = action.comment.body
              console.log('new body =', comment.body)
              
            }
            return comment
          })
          console.log(n === state, a)
          var l = _.mapKeys(a, 'id')
          return l

        default:
          return state
    }
}

