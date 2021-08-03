import React from 'react'
import Message from '../components/Message/Message'
import Input from '../components/Inputs/Input'
import { Redirect } from 'react-router'
import { AUTHORS } from '../components/App/constants'
// import usePrevious from '../hooks/usePrevious'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addMessage } from '../actions/messages'
import { useIsChatExists } from '../hooks/useIsChatExists'

const Chat = (props) => {
  // const [messageList, setMessageList] = React.useState([])
  // const timer = React.useRef(null)
  // const prevMessageList = usePrevious(messageList)

  const { chatId } = useParams()

  const messageList = useSelector((state) => state.messages[chatId] || [])
  const dispatch = useDispatch()

  // React.useEffect(() => {
  //   if (
  //     prevMessageList?.length < messageList.length &&
  //     messageList[messageList.length - 1].author !== AUTHORS.BOT
  //   ) {
  //     timer.current = setTimeout(
  //       () =>
  //         setMessageList((currentMessageList) => [
  //           ...currentMessageList,
  //           { author: AUTHORS.BOT, text: 'Привет' },
  //         ]),
  //       1500
  //     )
  //   }
  // }, [messageList, prevMessageList])

  // React.useEffect(() => {
  //   return () => {
  //     clearTimeout(timer.current)
  //   }
  // }, [])

  const handleMessageSubmit = (newMessageText) => {
    dispatch(
      addMessage(chatId, {
        id: `message${Date.now()}`,
        author: AUTHORS.ME,
        text: newMessageText,
      })
    )
  }

  const isChatExists = useIsChatExists({ chatId })

  if (!isChatExists) {
    return <Redirect to="/chats" />
  }

  return (
    <div className="chat">
      <Input onSubmit={handleMessageSubmit} />

      {messageList.length ? (
        <div className="bordered">
          {messageList.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              author={message.author}
              render={({ className }) => (
                <span className={className}>
                </span>
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Chat