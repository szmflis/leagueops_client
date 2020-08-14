import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import playerReducer from '../reducers/playerReducer'
import searchReducer from '../reducers/searchReducer'
import notificationReducer from '../reducers/notificationReducer'

const reducer = combineReducers({
  player: playerReducer,
  search: searchReducer,
  notification: notificationReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
)

export default store
