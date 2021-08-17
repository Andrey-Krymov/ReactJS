import { ADD_MESSAGE } from '../actions/messages'

const initialState = {}

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.payload.chatId]: [
          ...(state[action.payload.chatId] || []),
          action.payload.message,
        ],
      }
    }
    default:
      return state
  }
}
