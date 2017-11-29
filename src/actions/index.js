import md5 from "md5"

export const doIncrement = () => ({
  type: "INCREMENT"
})

export const doSet = ev => ({
  type: "SET",
  value: ev.target.value
})

export const txtSet = ev => ({
  type: "TXTSET",
  value: ev.target.value
})

export const dummy = () => ({
  type: "DUMMY"
})

export const goBack = history => ({
  type: "GO_BACK",
  history
})

export const getDummyData = id => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: "DUMMY_DATA",
        id,
        value: id + " " + new Date().toString()
      })
    }, 3000)
  }
}
