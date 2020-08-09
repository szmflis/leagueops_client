export const setSearchParams = (nickname, region) => {
  return {
    type: 'SET_SEARCH_PARAMS',
    data: {
      nickname: nickname,
      region: region
    }
  }
}


const reducer = (state = [], action) => {
  console.log("In searchReducer ====> ", state, action)
  switch (action.type) {
    case 'SET_SEARCH_PARAMS': {
      console.log("state before: ", state)
      return state.concat(action.data)
    }

    default:
      return state
  }
}

export default reducer