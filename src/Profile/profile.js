import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { changeIsOnlineWithThunk } from '../actions/profile'
import ProfileInfo from '../components/ProfileInfo'

export default function Profile(props) {
  const dispatch = useDispatch()
  const { age, name, isOnline } = useSelector((state) => state.profile)

  // React.useEffect(() => {
  //   dispatch(addProfileToDatabase())
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const handleIsOnlineChange = (event) => {
    dispatch(changeIsOnlineWithThunk(event.target.checked))
  }

  return (
    <div>
      <p>Profile page</p>
      <ProfileInfo age={age} name={name} />

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
