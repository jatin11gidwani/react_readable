import _ from 'lodash'
import { FETCH_POSTS, UPDATE_VOTE, DELETE_POST } from './../actions/index'

export default function postsReducer(state = {}, action) {
    switch(action.type) {
        case FETCH_POSTS:
          // console.log(action.payload.data)
          const posts = _.mapKeys(action.payload, 'id')
          // console.log(posts)
          return posts
        
         case UPDATE_VOTE:
           console.log('vote', action.value)
           return _.map(state, post => {
             if(post.id == action.id) {
               console.log('match', post.voteScore)
               post.voteScore  += action.value
             }
             return post
           })
        
        case DELETE_POST:
          console.log('Deleted')

          // var result = _.pickBy(state, function(value, key) {
          //   return _.startsWith(key, "a")
          // })


          // return _.map(state, post => {
          //   if(post.id == action.id) {
          //     return null
          //   }
          //   return post
          // })
          var arrState = _.values(state);
          console.log(arrState)

          const result = arrState.filter(post => post.id !== action.id);
          const newState = _.mapKeys(result, 'id')
          return newState
          

        default:
          return state
    }
}

