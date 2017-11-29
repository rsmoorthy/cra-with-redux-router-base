import React, { Component } from "react"
import { Route, Link, withRouter } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import DynComp from "./components/DynComp"
import WrapRoute from "./components/WrapRoute"
import { connect } from "react-redux"

import * as utils from "./utils"

class About extends Component {
  componentDidMount() {
    console.log("About mounted")
  }
  componentWillUnmount() {
    console.log("About unmounted")
  }
  render() {
    return <span>About</span>
  }
}

class App extends Component {
  render() {
    const apps = this.props.apps
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About Us</Link>
          <br />
          <ul>
            {apps.map(id => (
              <li key={id}>
                <Link to={`/dc/${id}`}>{id}</Link>
              </li>
            ))}
          </ul>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/about/:id?"
            render={props => <About {...props} />}
          />
          {apps.map(id => (
            <Route
              key={id}
              exact
              path="/dc/:id"
              children={({ match, ...rest }) => (
                <div
                  style={{
                    display:
                      match && match.params.id === id.toString()
                        ? "block"
                        : "none"
                  }}
                >
                  <DynComp {...rest} match={match} id={id} />
                </div>
              )}
            />
          ))}
        </main>
      </div>
    )
  }
}

export default withRouter(
  connect(
    utils.mapStateToProps("demo", ["apps", "counter"]),
    utils.mapDispatchToProps
  )(App)
)
