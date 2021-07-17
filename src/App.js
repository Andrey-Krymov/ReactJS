import React from 'react';
import logo from './logo.svg';
import './App.css';

const AUTHORS = {
  ME: 'ME',
  BOT: 'BOT',
}

function Message(props) {
  return <p className="text">
    {props.author}: {props.text}
  </p>
}

function App(props) {

  const [messageList, setMessageList] = React.useState([])

  const [inputValue, setInputValue] = React.useState('')
  // const prevMessageList = usePrevious(messageList)

  React.useEffect(() => {
    if (
      // prevMessageList &&
      // prevMessageList.length < messageList.length &&
      messageList.length &&
      messageList[messageList.length - 1].author !== AUTHORS.BOT
    ) {
      setTimeout(() => {
        setMessageList((currentMessageList) => [
          ...currentMessageList,
          { author: AUTHORS.BOT, text: 'hello' },
        ])
      }, 1500)

      // setTimeout(() => {
      //   setMessageList(
      //     (currentMessageList) => {
      //       currentMessageList.push({
      //         author: AUTHORS.BOT,
      //         text: 'hello'
      //       })
      //       return currentMessage
      //     }, 1500)
    }
  }, [messageList ])

  const hendleMessageChange = (e) => {
    setInputValue(e.target.value)
  }

  const hendleMessageSabmit = (e) => {
    e.preventDefault()

    setMessageList((currentMessageList) => [
      ...currentMessageList,
      { author: AUTHORS.ME, text: inputValue }
    ])
    setInputValue('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://gb.ru/lessons/155799/homework"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lesson 2 homework
        </a>

        <form className="app__form" onSubmit={hendleMessageSabmit}>
          <input
            required
            placeholder="Введите сообщение"
            value={inputValue}
            onChange={hendleMessageChange} />
          <button className="btn">send</button>
        </form>

        {messageList.map((message, index) =>
          <Message key={index}
            text={message.text}
            author={message.author} />)}

      </header>
    </div>
  );
}

export default App;
