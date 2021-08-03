import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { changeIsOnline } from '../actions/profile'

export default function Profile(props) {
  const dispatch = useDispatch()
  const { age, name, isOnline } = useSelector(state => state.profile)

  const handleIsOnlineChange = (e) => {
    dispatch(changeIsOnline(e.target.checked))
  }

  return (
    <div>
      <p>Profile page</p>
      <p>
        <b>Name: </b>
        {name}
      </p>
      <p>
        <b>Age: </b>
        {age}
      </p>

      <FormControlLabel
        control={
          <Checkbox
            checked={isOnline}
            onChange={handleIsOnlineChange}
            name="checkedB"
            color="primary"
          />
        }
        label={<p>Is user online</p>}
      />
    </div>
  )
}
