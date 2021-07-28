import { CHANGE_NAME, CHANGE_IS_ONLINE } from '../actions/profile'

const initialState = {
  name: 'userName',
  age: 'userAge',
  isOnline: true,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.payload.name,
      }
    }
    case CHANGE_IS_ONLINE: {
      return {
        ...state,
        isOnline: action.payload.isOnline
      }
    }
    default:
      return state
  }
}
