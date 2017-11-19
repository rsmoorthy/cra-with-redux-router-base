import * as R from 'ramda'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'

export const mapStateToProps = R.curry((base, keys, state) => { var r = R.pick(keys, state[base]); console.log('mstp', r, state[base]); return r })
export const mapDispatchToProps = (dispatch) => {
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}
