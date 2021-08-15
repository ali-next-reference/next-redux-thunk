import { combineReducers } from 'redux'

import { userReducer } from './basicReducer'

// COMBINED REDUCERS
export default combineReducers({
  users: userReducer
})