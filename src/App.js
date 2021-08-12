import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router'
import { Link } from 'react-router-dom'

function App() {
  // const [chats, setChats] = React.useState([
  //   { id: 'chat1', name: 'Чат 1' },
  //   { id: 'chat2', name: 'Чат 2' },
  //   { id: 'chat3', name: 'Чат 3' },
  // ])
  // const [currentChat, setCurrentChat] = React.useState(chats[0])

  // const handleChangeChat = (chat) => setCurrentChat(chat)

  // const handleAddChat = (chatName) => {
  //   setChats((currentChats) => [
  //     ...currentChats,
  //     { name: chatName, id: `chat${Date.now()}` },
  //   ])
  // }

  // const handleRemoveChat = (chatId) => {
  //   setChats((currentChats) =>
  //     currentChats.filter((chat) => chat.id !== chatId)
  //   )
  // }

  // const handleIsChatExists = React.useCallback(
  //   (chatId) => {
  //     return Boolean(chats.find((chat) => chat.id === chatId))
  //   },
  //   [chats]
  // )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://gb.ru/lessons/155805/homework"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lesson 8 hw работа с API
        </a>

        <div className="app">
          <div className="App-link">
            <Link to="/">Home</Link>
            <Link to="/chats">Chats</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/news">News</Link>
            <Link to="/reports">Reports</Link>
          </div>

          <Router
            // chats={chats}
            // currentChat={currentChat}
            // onCurrentChatChange={handleChangeChat}
            // getIsChatExists={handleIsChatExists}
            // onAddChat={handleAddChat}
            // onRemoveChat={handleRemoveChat}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
