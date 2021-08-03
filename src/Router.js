import React from 'react'
import { Switch, Route } from 'react-router'
import Chat from './Chat/Chat'
import Home from './Home'
import Chats from './Chats/Chats'
import Profile from './Profile/profile'

export default function Router(props) {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <Home
            chats={props.chats}
            currentChat={props.currentChat}
            onCurrentChatChange={props.onCurrentChatChange}
          />
        )}
      />

      <Route exact path="/chats" component={Chats} />

      <Route path="/chats/:chatId" component={Chat} />

      <Route path="/profile">
        <Profile />
      </Route>

      <Route>
        <p>404: not found</p>
      </Route>
    </Switch>
  )
}