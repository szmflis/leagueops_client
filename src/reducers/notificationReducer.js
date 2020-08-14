export const resetNotification = () => {
  return {
    type: 'SET_NOTIFICATION',
    data: null,
  }
}

export const setNotification = (message) => {
  return dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: message,
    })
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION': {
      return action.data
    }

    default:
      return state
  }
}

export default reducer
