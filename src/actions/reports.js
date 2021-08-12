import { API_URL } from '../components/App/constants'
import transport from '../services/transport'

export const SET_REPORTS_LIST = 'REPORTS::SET_REPORTS_LIST'
export const SET_ERROR_STATUS = 'REPORTS::SET_ERROR_STATUS'
export const SET_LOADING_STATUS = 'REPORTS::SET_LOADING_STATUS'
export const SET_IDLE_STATUS = 'REPORTS::SET_IDLE_STATUS'

export const setErrorStatus = () => ({ type: SET_ERROR_STATUS })
export const setLoadingStatus = () => ({ type: SET_LOADING_STATUS })
export const setIdleStatus = () => ({ type: SET_IDLE_STATUS })

export const setReportsList = (reportsList) => ({
  type: SET_REPORTS_LIST,
  payload: {
    reportsList,
  }
})

export const fetchReports = () => {
  return (dispatch, getState) => {
    dispatch(setLoadingStatus())

    fetch(API_URL)
      .then((response) => {
        if (!response.ok || response.status !== 200) {
          throw Error('Something went wrong')
        }

        return response.json()
      })
      .then((responseJson) => {
        dispatch(setReportsList(responseJson))
        dispatch(setIdleStatus())
      })
      .catch((error) => {
        console.error('error', error)

        dispatch(setErrorStatus())
      })
  }
}

export const fetchReportsByAxios = () => {
  return async (dispatch, getState) => {
    dispatch(setLoadingStatus())

    try {
      const { data } = await transport.get(API_URL)

      dispatch(setIdleStatus())
      dispatch(setReportsList(data))
    } catch (error) {
      console.error('error', error)

      dispatch(setErrorStatus())
    }
  }
}
