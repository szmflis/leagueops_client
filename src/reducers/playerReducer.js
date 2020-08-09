import { getPlayerMatches } from '../services/championService' 

export const setPlayerStats = (nickname, region) => {
  return async dispatch => {
    const stats = await getPlayerMatches(nickname, region)
    dispatch({
      type: 'SET_PLAYER_STATS',
      data: stats
    })
  }
}

const reducer = (state = [], action) => {
  console.log("In playerReducer ====> ", state, action)
  switch (action.type) {
    case 'SET_PLAYER_STATS': {
      console.log("state before: ", state)
      return state.concat(action.data)
    }

    default:
      return state
  }
}

export default reducer