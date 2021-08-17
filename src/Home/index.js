import React from 'react'
import { connect } from 'react-redux'
import { changeName } from '../actions/profile'
import Input from '../components/Inputs/Input'
import ProfileInfo from '../components/ProfileInfo'

function Home(props) {

  const { name, age, onChangeProfileName } = props

  const handleNameSubmit = (newName) => {
    onChangeProfileName(newName)
  }

  return (
    <div className="app app__content app__content_row">
      <div className="bordered">
      <ProfileInfo age={age} name={name} />
      </div>

      <Input onSubmit={handleNameSubmit} />
    </div>
  )
}

const mapStateToProps = (globalState) => {
  const { name, age } = globalState.profile
  return { name, age }
}
const mapDispatchToProps = {
  onChangeProfileName: changeName,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
