import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form'
import  postsReducer  from './reducer_posts'
import commentsReducer from './reducer_comments'

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  form: formReducer
});

export default rootReducer;
