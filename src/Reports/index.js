import React from 'react'
import { Button } from '@material-ui/core'
import { REPORTS_REQUEST_STATUS } from '../reducers/reports'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchReports, fetchReportsByAxios } from '../actions/reports'
import { fetchNews, fetchNewsByAxios, setNewsList } from '../actions/news'

export default function Reports(props) {

  const { status, list } = useSelector((state) => state.news)
  const dispatch = useDispatch()

  const loadData = () => dispatch(fetchNews())
  const loadDataByAxios = () => dispatch(fetchNewsByAxios())
  const clearData = () => dispatch(setNewsList([]))

  // React.useEffect(() => {
  //   loadDataByAxios()
  // },)

  if (status === REPORTS_REQUEST_STATUS.LOADING) {
    return <p>LOADING...</p>
  }

  // if (status !== NEWS_REQUEST_STATUS.IDLE || NEWS_REQUEST_STATUS.LOADING) {
  //   return <p>no news loaded</p>
  // }

  return (
    <div>
      <p>Log News</p>
      
      <Button
        variant="contained"
        onClick={loadDataByAxios}>LOAD LOG by AXIOS</Button>
      <hr />
      <Button
        variant="contained"
        onClick={clearData}>CLEAR LOG</Button>
      <hr />

      {status !== REPORTS_REQUEST_STATUS.ERROR ? (
        <ol>
          {list.map((newsItem) => (
            <li key={newsItem.id}>
              <p>ID: {newsItem.id}, published at {newsItem.publishedAt}</p>
              <p>News: <span style={{ color: '#61dafb' }}>
                "{newsItem.title}"</span></p>
              <p>Site: <span style={{ color: '#61dafb' }}>
                {newsItem.newsSite}</span></p>
              <p>{newsItem.url}</p>
            </li>
          ))}
        </ol>
      ) : (
          <div>
          <p style={{ color: 'red' }}>ERROR</p>
          <hr />
          <Button
            variant="contained"
            onClick={loadData}>Try Again</Button>
          <hr />
        </div>
      )}
    </div>
  )
}
