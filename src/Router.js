import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Chat from './Chat/Chat'
import Home from './Home'
import Chats from './Chats/Chats'
import Profile from './Profile/profile'
import News from './News'
import Reports from './Reports'
import Login from './Login'
import { useSelector } from 'react-redux'

const PrivateRoute = (props) => {
  const isAuthed = useSelector((state) => state.profile.isAuthed)

  return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}

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

      <PrivateRoute exact path="/chats" component={Chats} />

      <PrivateRoute path="/chats/:chatId" component={Chat} />

      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>

      <Route path="/news" component={News} />

      <Route path="/reports" component={Reports} />

      <Route path="/login" component={Login} />

      <Route>
        <p>404: not found</p>
      </Route>
    </Switch >
  )
}