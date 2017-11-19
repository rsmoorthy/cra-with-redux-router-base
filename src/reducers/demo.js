const initialState = {
  counter: 0,
  text: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
        text: state.text + " (" + state.text.length + ")"
      }

    case "SET":
      let val = parseInt(action.value, 10)
      if (isNaN(val)) return state
      return {
        ...state,
        counter: val
      }

    case "TXTSET":
      return {
        ...state,
        text: action.value
      }

    default:
      return state
  }
}
