const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT': {
      console.log('Init')
    }

    default:
      return state
  }
}

export default reducer
