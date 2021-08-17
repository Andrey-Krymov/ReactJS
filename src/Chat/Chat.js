import React from 'react'
import Message from '../components/Message/Message'
import Input from '../components/Inputs/Input'
import { Redirect } from 'react-router'
import { AUTHORS } from '../components/App/constants'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { sendMessageToBot, subscribeOnMessagesChangings } from '../actions/messages'
import { useIsChatExists } from '../hooks/useIsChatExists'

const Chat = (props) => {
  const { chatId } = useParams()

  const messageList = useSelector((state) => state.messages[chatId] || [])
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(subscribeOnMessagesChangings(chatId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMessageSubmit = (newMessageText) => {

    dispatch(
      sendMessageToBot(chatId, {
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
      <p>вы в чате </p>
      {messageList.length ? (
        <div className="bordered">
          {messageList.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              author={message.author}
            />
          ))}
        </div>
      ) : null}

      <Input onSubmit={handleMessageSubmit} />
    </div>
  )
}

export default Chat