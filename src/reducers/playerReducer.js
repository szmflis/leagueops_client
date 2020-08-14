import { getPlayerMatches } from '../services/playerService'
import { setNotification } from './notificationReducer'

export const resetPlayerStats = () => {
  return {
    type: 'SET_PLAYER_STATS',
    data: [],
  }
}

export const setPlayerStats = (nickname, region) => {
  return async dispatch => {
    const stats = await getPlayerMatches(nickname, region)

    if (stats.error) {
      dispatch(setNotification(stats.error))
    } else {
      dispatch({
        type: 'SET_PLAYER_STATS',
        data: stats,
      })
    }
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLAYER_STATS': {
      return action.data
    }

    default:
      return state
  }
}

export default reducer
