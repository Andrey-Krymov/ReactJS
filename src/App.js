import React from 'react'
import firebase from 'firebase'
import logo from './logo.svg';
import './App.css';
import Router from './Router'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeIsAuthed } from './actions/profile'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('onAuthStateChanged', { user })

      dispatch(changeIsAuthed(Boolean(user)))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSignOut = (e) => {
    e.preventDefault()

    firebase.auth().signOut()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://gb.ru/lessons/155806/homework"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lesson 9 hw Firebase
        </a>

        <div className="app">
          <div className="App-link">
            <Link to="/">Home</Link>
            <Link to="/chats">Chats</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/news">News</Link>
            <Link to="/reports">Reports</Link>
            <Link to="/login">Login</Link>
            <a href="/" onClick={handleSignOut}>
              Sign out
            </a>
          </div>

          <Router />

        </div>
      </header>
    </div>
  );
}

export default App;
