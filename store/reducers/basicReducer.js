import * as types from '../actions/types'

const initialState = [{
  id: '5478b1c8-74a1-4ac6-a156-1c4cd70926f8',
  name: "ali"
}]

// This reducer is the 'use department', processing any actions that are related to managing users 
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_USER:
      return [ ...state, payload ]

    case types.DELETE_USER:
      return state.filter(user=>user.id!==payload)
        
    default:
      return state;
  }
};

export default userReducer;
