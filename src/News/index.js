import React from 'react'
import { Button } from '@material-ui/core'
import { NEWS_REQUEST_STATUS } from '../reducers/news'
import { fetchNews, fetchNewsByAxios, setNewsList } from '../actions/news'
import { useDispatch, useSelector } from 'react-redux'
// import { API_URL } from '../components/App/constants'
// import transport from '../services/transport'

export default function News(props) {

  // const [news, setNews] = React.useState([])

  // const [isLoading, setIsLoading] = React.useState(false)
  // const [isError, setIsError] = React.useState(false)

  // const loadData = () => {

  //   setIsLoading(true)
  //   setIsError(false)

  //   fetch(API_URL)
  //     .then((response) => {
  //       console.log('success', { response })

  //       if (!response.ok || response.status !== 200) {
  //         throw new Error(`Something went wrong', ${response.status}`)
  //       }

  //       return response.json()
  //     })
  //     .then((responseJson) => {
  //       console.log('success 2 then', { responseJson })

  //       setNews(responseJson)
  //       setIsLoading(false)
  //     })
  //     .catch((error) => {
  //       console.error('error', error)

  //       setIsLoading(false)
  //       setIsError(true)
  //     })
  // }

  // async await

  // const loadData = async () => {
  //   try {
  //     const response = await fetch(API_URL)

  //     if (!response.ok || response.status !== 200) {
  //       throw new Error(`Something went wrong', ${response.status}`)
  //     }
  //     const responseJson = await response.json()

  //     console.log('success loadData', response, responseJson)
  //   }
  //   catch (error) {
  //     console.error('error', error)
  //   }
  // }

  // const loadDataByAxios = () => {
  //   transport
  //     .get(API_URL)
  // .then((response) => console.log('success response by axios', { response }))
  //     .then(({ data }) => console.log('success data by axios', { data }))
  //     .catch((error) => console.error('error', error))
  // }

  // const loadDataByAxios = async () => {
  //   setIsLoading(true)
  //   setIsError(false)

  //   try {
  //     const { data } = await transport.get(API_URL)

  //     console.log('success data by axios', { data })

  //     setNews(data)
  //     setIsLoading(false)
  //   }
  //   catch (err) {
  //     console.warn(err)

  //     setIsLoading(false)
  //     setIsError(true)
  //   }
  // }

  // React.useEffect(() => {
  //   // loadData()
  //   // loadDataByAxios()
  // }, [])

  // const clearData = () => setNews([])

  // if (isLoading) {
  //   return <p>LOADING...</p>
  // }

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

      {/* {!isError ? (
        <ol>
          {news.map((newsItem) => (
            <li key={newsItem.id}>
            <p>{newsItem.title}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p>ERROR</p>
      )} */}

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