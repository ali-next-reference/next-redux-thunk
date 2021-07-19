import * as types from '../actions/types'

const initialState = {
  '5478b1c8-74a1-4ac6-a156-1c4cd70926f8': "ali",
};

const basicReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_NAME:
      return { ...state, ...payload }

    default:
      return state;
  }
};

export default basicReducer;
