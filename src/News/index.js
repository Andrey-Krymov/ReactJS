import React from 'react'
import { Button } from '@material-ui/core'
import { NEWS_REQUEST_STATUS } from '../reducers/news'
import { fetchNews, fetchNewsByAxios, setNewsList } from '../actions/news'
import { useDispatch, useSelector } from 'react-redux'

export default function News(props) {

  const { status, list } = useSelector((state) => state.news)
  const dispatch = useDispatch()

  const loadData = () => dispatch(fetchNews())
  const loadDataByAxios = () => dispatch(fetchNewsByAxios())
  const clearData = () => dispatch(setNewsList([]))

  if (status === NEWS_REQUEST_STATUS.LOADING) {
    return <p>LOADING...</p>
  }

  return (
    <div>
      <p>NEWS page</p>
      <Button
        variant="contained"
        onClick={loadData}>LOAD DATA</Button>
      <hr />
      <Button
        variant="contained"
        onClick={loadDataByAxios}>LOAD DATA BY AXIOS</Button>
      <hr />
      <Button
        variant="contained"
        onClick={clearData}>CLEAR DATA</Button>
      <hr />

      {status !== NEWS_REQUEST_STATUS.ERROR ? (
        <ol>
          {list.map((newsItem) => (
            <li style={{ padding: '0px 25px' }} key={newsItem.id}>
              <p >{newsItem.summary}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p style={{ color: 'red' }}>ERROR</p>
      )}
    </div>
  )
}