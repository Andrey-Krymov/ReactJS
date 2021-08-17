import React from 'react'
import firebase from 'firebase'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default function Login(props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [isSigningUp, setIsSigningUp] = React.useState(false)

  const HendleChangeEmail = (e) => setEmail(e.target.value)
  const HendleChangePassword = (e) => setPassword(e.target.value)
  const handleIsSigningUpChange = (e) => setIsSigningUp(e.target.checked)


  // firebase.auth().onAuthStateChanged((user) => {
  //   console.log('onAuthStateChanged', { user })
  // }

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleSubmit = () => {
    console.log('Попытка log in', { email, password })

    // firebase.auth().onAuthStateChanged((user) => {
    //     console.log('onAuthStateChange', { user })
    // })

    if (!email || !password) {
      setError('Заполните поля')
      return
    }

    if (isSigningUp) {
      handleSignUp()
      return
    }

    handleLogin()
  }

  return <div>
    <p>{isSigningUp ? 'Sign up' : 'Login'}</p>
    <FormControlLabel
      control={
        <Checkbox
          checked={isSigningUp}
          onChange={handleIsSigningUpChange}
          name="checkedB"
          color="primary"
        />
      }
      label={<p>Еще нет учетной записи?</p>}
    />
    <p>Login</p>
    <TextField
      type="email"
      onChange={HendleChangeEmail}
      className="child__text-field bordered"
      fullWidth
      required
      autoFocus
      variant="outlined"
      // label="e-mail"
      placeholder="Enter your e-mail"
      value={email}
      color="primary" />

    <p>Password</p>
    <TextField
      type="password"
      onChange={HendleChangePassword}
      className="child__text-field bordered"
      fullWidth
      required
      // autoFocus
      variant="outlined"
      // label="password"
      placeholder="Enter your password"
      value={password}
      color="primary" />

    <button
      className="btn"
      onClick={handleSubmit}>
      {isSigningUp ? 'Sign up' : 'Login'}
    </button>

    <hr />
    <p>{error}</p>

  </div>
}
