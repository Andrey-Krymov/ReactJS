import React from 'react'
// import { connect, useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { changeName } from '../actions/profile'
import Input from '../components/Inputs/Input'

function Home(props) {
  // const dispatch = useDispatch()
  // const { name, age } = useSelector((state) => state.profile)

  const { name, age, onChangeProfileName } = props

  const handleNameSubmit = (newName) => {
    // dispatch(changeName(newName))
    onChangeProfileName(newName)
  }

  return (
    <div className="app app__content app__content_row">
      <div className="bordered">
        <p>
          <b>Name: </b>
          {name}
        </p>
        <p>
          <b>Age: </b>
          {age}
        </p>
      </div>

      <Input onSubmit={handleNameSubmit} />
    </div>
  )
}

const mapStateToProps = (globalState) => {
  const { name, age } = globalState.profile
  return { name, age }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChangeProfileName: (newName) => dispatch(changeName(newName))
//   }
// }
const mapDispatchToProps = {
  onChangeProfileName: changeName,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
