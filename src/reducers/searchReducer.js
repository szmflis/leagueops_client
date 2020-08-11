export const setSearchParams = (nickname, region) => {
  return {
    type: 'SET_SEARCH_PARAMS',
    data: {
      nickname,
      region,
    },
  }
}

const reducer = (state = [], action) => {
  console.log('In searchReducer ====> ', state, action)
  switch (action.type) {
    case 'SET_SEARCH_PARAMS': {
      return action.data
    }

    default:
      return state
  }
}

export default reducer
