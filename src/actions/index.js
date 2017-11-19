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
