import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import demo from './demo'


export default combineReducers({
  routing: routerReducer,
  demo
})
