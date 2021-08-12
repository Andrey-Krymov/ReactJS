import {
  SET_ERROR_STATUS,
  SET_IDLE_STATUS,
  SET_LOADING_STATUS,
  SET_REPORTS_LIST,
} from '../actions/reports'

export const REPORTS_REQUEST_STATUS = {
  LOADING: 'loading',
  ERROR: 'error',
  IDLE: 'idle',
}

const initialState = {
  list: [],
  status: REPORTS_REQUEST_STATUS.IDLE,
}

export default function reportsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IDLE_STATUS:
      return {
        ...state,
        status: REPORTS_REQUEST_STATUS.IDLE,
      }
    case SET_LOADING_STATUS:
      return {
        ...state,
        status: REPORTS_REQUEST_STATUS.LOADING,
      }
    case SET_ERROR_STATUS:
      return {
        ...state,
        status: REPORTS_REQUEST_STATUS.ERROR,
      }
    case SET_REPORTS_LIST: {
      return {
        ...state,
        list: action.payload.reportsList,
      }
    }
    default:
      return state
  }
}
