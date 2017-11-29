import { connect } from "react-redux"
import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import * as utils from "../utils"

class DynComp extends Component {
  componentWillMount() {
    console.log("DynComp mounted", this.props.id)
    this.props.getDummyData(this.props.id)
  }
  componentWillUnmount() {
    console.log("DynComp unmounted", this.props.id)
  }

  render() {
    const id = this.props.id
    return (
      <div>
        <b>{this.props.dummyData[id]}</b>: {id}
      </div>
    )
  }
}

export default connect(
  utils.mapStateToProps("demo", ["dummyData"]),
  utils.mapDispatchToProps
)(DynComp)
