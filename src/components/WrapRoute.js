import React from "react"
import { connect } from "react-redux"
import { Route, withRouter } from "react-router-dom"
import * as utils from "../utils"
import { matchPath } from "react-router"

const WrapRoute = ({ path, exact, component: Component, ...rest }) => {
  console.log("wr", rest)
  const match = matchPath(rest.location.pathname, { path, exact })
  return (
    <div
      style={{
        display: match ? "block" : "none"
      }}
    >
      {console.log("WrapRoute", path, match)}
      <Route
        {...rest}
        render={props => {
          console.log("WrapRoute render", match, props)
          return <Component {...props} match={match ? match : props.match} />
        }}
      />
    </div>
  )
}

export default withRouter(connect(null, utils.mapDispatchToProps)(WrapRoute))
