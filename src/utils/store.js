import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import championReducer from '../reducers/championReducer'
import playerReducer from '../reducers/playerReducer'
import searchReducer from '../reducers/searchReducer'

const reducer = combineReducers({
  champions: championReducer,
  player: playerReducer,
  search: searchReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
)

export default store
