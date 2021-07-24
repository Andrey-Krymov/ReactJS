import React from 'react'
import Message from './components/Message/Message'
import Input from './components/Inputs/Input'
import { AUTHORS } from './components/App/constants'
import usePrevious from './hooks/usePrevious'

const Chat = (props) => {
  const [messageList, setMessageList] = React.useState([])

  const timer = React.useRef(null)

  const prevMessageList = usePrevious(messageList)

  React.useEffect(() => {
    if (
      prevMessageList?.length < messageList.length &&
      messageList[messageList.length - 1].author !== AUTHORS.BOT
    ) {
      timer.current = setTimeout(
        () =>
          setMessageList((currentMessageList) => [
            ...currentMessageList,
            { author: AUTHORS.BOT, text: 'Привет' },
          ]),
        1500
      )
    }
  }, [messageList, prevMessageList])

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  const handleMessageSubmit = (newMessageText) => {
    setMessageList((currentMessageList) => [
      ...currentMessageList,
      { author: AUTHORS.ME, text: newMessageText },
    ])
  }

  return (
    <div className="chat">
      <Input onSubmit={handleMessageSubmit} />

      {messageList.length ? (
        <div className="bordered">
          {messageList.map((message, index) => (
            <Message
              key={index}
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