import React, { Component } from "react"
import { Route, Link } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"

const About = () => <h2>About</h2>

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About Us</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </main>
      </div>
    )
  }
}

export default App
