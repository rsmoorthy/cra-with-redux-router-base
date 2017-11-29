import React from "react"
import { connect } from "react-redux"

import * as utils from "../utils"

const Home = props => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome home!</p>
      <input
        type="number"
        value={props.counter}
        onChange={props.dummy}
        onBlur={props.doSet}
      />
      <br />
      <input
        type="text"
        value={props.text}
        onChange={props.txtSet}
        onBlur={props.txtSet}
      />
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
      <br />
      <button onClick={props.doIncrement}>Print Demo</button>
      <br />
      <button onClick={() => props.goBack(props.history)}>Go Back</button>
    </div>
  )
}

export default connect(
  utils.mapStateToProps("demo", ["counter", "text"]),
  utils.mapDispatchToProps
)(Home)
