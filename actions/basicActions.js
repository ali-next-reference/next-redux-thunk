import { v4 as uuidv4 } from 'uuid'

import * as types from './types'

export const addName = (name) => {
  dispatch({
    type: types.ADD_NAME,
    payload: {[uuidv4()]:name},
  })
}