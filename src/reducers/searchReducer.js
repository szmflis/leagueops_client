export const resetSearchParams = () => {
  return {
    type: 'SET_SEARCH_PARAMS',
    data: [],
  }
}

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
  switch (action.type) {
    case 'SET_SEARCH_PARAMS': {
      console.log(state)
      return action.data
    }

    default:
      return state
  }
}

export default reducer
