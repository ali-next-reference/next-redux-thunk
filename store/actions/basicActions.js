import { v4 as uuidv4 } from 'uuid'

import * as types from './types'

// create an action with a payload that is either a promise (needing thunk) or a user with an id
export const addUser = () => async (dispatch) => {
  const res = await fetch("https://fakercloud.com/schemas/property", {
    "headers": {
      "content-type": "application/json",
    },
    "body": "{\"name\":\"Full Name\",\"options\":{\"Locale\":\"en\"}}",
    "method": "POST"
  });
  const data = await res.json()

  dispatch({
    type: types.ADD_USER,
    payload: {id:uuidv4(), name:data.results[0]}
  })
}

export const deleteUser = (id) => async (dispatch) => {
  dispatch({
    type: types.DELETE_USER,
    payload: id
  })
}