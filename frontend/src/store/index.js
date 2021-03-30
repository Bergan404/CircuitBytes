import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import makePost from "./CreatePosts"
import allPosts from './AllPosts'
import addPost from './AddPost'
import makeCart from './AddPost'
import {reducerTwo} from './AddPost'


const rootReducer = combineReducers({
    session: sessionReducer,
    makePost,
    allPosts,
    addPost,
    makeCart,
    currentCart: reducerTwo,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

  export default configureStore;
